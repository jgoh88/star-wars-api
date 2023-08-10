import { useParams } from "react-router"
import { useGlobalState } from "../../hooks/globalState"
import { useEffect, useState } from "react"
import axiosSWAPI from "../../configs/axiosSWAPI"
import errorList from "../../configs/errors"

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
                dispatch({type: 'GET', resource: resource, data: fetchedData})
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
        <></>
    )
}