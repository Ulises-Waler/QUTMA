import React, { useEffect, useState } from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import { FileEarmarkTextFill, PeopleFill } from 'react-bootstrap-icons';

export const Dashboard = () => {

    const [user, setUser] = useState({})

    useEffect(() => {
        getUser()
    }, []);

    const getUser = () => {
        const user = JSON.parse(localStorage.user);
        setUser(user);
    }


    return (
        <Container>
            <Card className='mt-3'>
                <Card.Body>
                <Card.Title>Bienvenido de Nuevo {user.name} </Card.Title>
                <Row>
                    <Col>
                        <Card className='p-3'>
                            <Card.Title>Numero de Usuarios Registrados:</Card.Title>
                            <Card.Body>
                            <PeopleFill/>83
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card className='p-3'> 
                            <Card.Title>Numero de Cuestionarios Creados:</Card.Title>
                            <Card.Body>
                            <FileEarmarkTextFill/>   223
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                </Card.Body>
            </Card>
        </Container>)
}
