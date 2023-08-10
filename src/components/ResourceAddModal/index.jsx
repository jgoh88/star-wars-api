import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useGlobalState } from "../../hooks/globalState";
import siteResources from "../../configs/siteResourceConfig";
import { useFormik } from "formik";

function validate(values) {
    // validation rules to be added if required
}

export default function ResourceAddModal({resource}) {
    const initialFormState = siteResources[resource].fields.reduce((t, c) => {
        t[c.name] = ''
        return t
    }, {})
    const formik = useFormik({
        initialValues: initialFormState,
        validate,
        onSubmit: values => {
            handleSubmit(values)
        },
    })
    const [show, setShow] = useState(false)
    const {data, dispatch} = useGlobalState()

    const handleClose = () => {
        setShow(false)
        formik.handleReset()
    }
    const handleShow = () => setShow(true)
    const handleSubmit = (formValues) => {
        const tempData = [...data[resource]]
        tempData.push(formValues)
        dispatch({type: 'UPDATE', resource: resource, data: tempData})
        handleClose()
    }

    return (
        <>
            <Button variant="success" onClick={handleShow}>
                Add {siteResources[resource].navTitle}
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New {siteResources[resource].navTitle}</Modal.Title>
                </Modal.Header>
                <Form onSubmit={formik.handleSubmit}>
                    <Modal.Body>
                        {siteResources[resource].fields.map(field => {
                            return (
                                <Form.Group key={field.name} className="mb-3" controlId={`form${field.name}`}>
                                    <Form.Control 
                                        name={field.name}
                                        type={field.type} 
                                        placeholder={field.label}
                                        value={formik.values[field.name]}
                                        onChange={formik.handleChange}
                                    />
                                </Form.Group>
                            )
                        })}
                        (Note: Any added records are only effective until you refresh the page.)
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            Add
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}