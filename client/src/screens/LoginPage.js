import React, { useRef } from 'react'
import {Button, Container,Form} from 'react-bootstrap'
import { v4 as uuidv4} from 'uuid'

const LoginPage = ({onIdSubmit}) => {

    const idRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()

        onIdSubmit(idRef.current.value)
    }

    const createNewId = () => {
        onIdSubmit(uuidv4())
    }

    return (
        <Container className="align-items-center d-flex" style={{height:"100vh"}}>
            <Form className="w-100" onSubmit={handleSubmit}>
                <Form.Group className="my-4">
                    <Form.Label>Enter you ID</Form.Label>
                    <Form.Control ref={idRef} type="text" required />
                </Form.Group>
                <Button type="submit" className="me-2" >Login</Button>
                <Button onClick={createNewId}  variant="secondary" >Get a new ID</Button>
                </Form>
        </Container>
    )
}

export default LoginPage
