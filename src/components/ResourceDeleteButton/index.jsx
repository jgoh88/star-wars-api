import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useGlobalState } from "../../hooks/globalState";
import siteResources from "../../configs/siteResourceConfig";

export default function ResourceDeleteButton({resource, index}) {
    const [show, setShow] = useState(false)
    const {data, dispatch} = useGlobalState()

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const handleDelete =() => {
        handleClose()
        const tempData = [...data[resource]]
        tempData.splice(index, 1)
        dispatch({type: 'UPDATE', resource: resource, data: tempData})
    }

    return (
        <>
            <Button variant="danger" onClick={handleShow}>
                Delete
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete {data[resource][index][siteResources[resource].fields[0].name]}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete {data[resource][index][siteResources[resource].fields[0].name]} from record? (Note: Any deletion is only effective until you refresh the page.)</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleDelete}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}