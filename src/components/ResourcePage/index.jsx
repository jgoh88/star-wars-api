import { useParams } from "react-router-dom"
import { useGlobalState } from "../../hooks/globalState"
import { useEffect, useState } from "react"
import axiosSWAPI from "../../configs/axiosSWAPI"
import errorList from "../../configs/errors"
import { Container, Row, Col } from "react-bootstrap"
import siteResources from "../../configs/siteResourceConfig"
import ResourceTable from "../ResourceTable"
import ResourceAddModal from "../ResourceAddModal"

export default function ResourcePage() {
    const {resource} = useParams()
    const {data, dispatch} = useGlobalState()
    const [isFetching, setIsFetching] = useState(false)

    useEffect(() => {
        if (data[resource]) {
            return
        }
        fetchData()
    }, [resource])

    async function fetchData() {
        setIsFetching(true)
        try {
            const fetchedData = []
            let isNextPageAvailable = true
            let page = 0
            while (isNextPageAvailable) {
                page += 1
                const res = await axiosSWAPI.get(`/${resource}/?page=${page}`)
                fetchedData.push(...res.data.results)
                dispatch({type: 'UPDATE', resource: resource, data: fetchedData})
                if (res.data.next === null) {
                    isNextPageAvailable = false
                }
            }
        } catch (err) {
            throw new Error(errorList.FETCH_ERROR)
        } finally {
            setIsFetching(false)
        }
    }

    return (
        <Container>
            <Row className="mt-3 text-center">
                <Col>
                    <h1>{siteResources[resource].label}</h1>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-end">
                    {!isFetching && <ResourceAddModal resource={resource} />}
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <ResourceTable isFetching={isFetching} resource={resource} />
                </Col>
            </Row>
        </Container>
    )
}