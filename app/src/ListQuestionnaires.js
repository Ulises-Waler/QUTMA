import React, { useEffect } from 'react'
import { Card, Col, Container, Dropdown, Form, Row, } from 'react-bootstrap'
import { JournalRichtext } from 'react-bootstrap-icons'

export const ListQuestionnaires = ({ rol }) => {

    const questionnaires = [
        {
            name: "Ejemplo 1",
            description: "Esto es una descripcion xdxd"
        },
        {
            name: "Ejemplo 1",
            description: "Esto es una descripcion xdxd"
        },
        {
            name: "Ejemplo 1",
            description: "Esto es una descripcion xdxd"
        },
        {
            name: "Ejemplo 1",
            description: "Esto es una descripcion xdxd"
        },
        {
            name: "Ejemplo 1",
            description: "Esto es una descripcion xdxd"
        },
        {
            name: "Ejemplo 1",
            description: "Esto es una descripcion xdxd"
        },
        {
            name: "Ejemplo 1",
            description: "Esto es una descripcion xdxd"
        },
        {
            name: "Ejemplo 1",
            description: "Esto es una descripcion xdxd"
        },
        {
            name: "Ejemplo 1",
            description: "Esto es una descripcion xdxd"
        },
        {
            name: "Ejemplo 1",
            description: "Esto es una descripcion xdxd"
        },
        {
            name: "Ejemplo 1",
            description: "Esto es una descripcion xdxd"
        },
        {
            name: "Ejemplo 1",
            description: "Esto es una descripcion xdxd"
        },
        {
            name: "Ejemplo 1",
            description: "Esto es una descripcion xdxd"
        },
        {
            name: "Ejemplo 1",
            description: "Esto es una descripcion xdxd"
        },
        {
            name: "Ejemplo 1",
            description: "Esto es una descripcion xdxd"
        },
    ]
    useEffect(() => {
        const url = rol == "Administrator" ? "/api/get-all-questionnaires" : "get/questionnaires-by-user"
    }, [])

    return (
        <Container >
            <Row>
                {
                    questionnaires.map(({ name, description }, i) => (
                        <Col>
                            <Card style={{ width: '15rem', boxShadow: '0 4px 8px rgba(0, 255, 255, 0.8)' }} className='mb-3'>
                                <Card.Body>
                                    <a href={`/create-questionnaire/${i}`} style={{ textDecoration: "none", color: "black" }}>
                                        <Card.Img style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.6)'}} src='https://i.pinimg.com/originals/df/9e/fb/df9efbff879b2318adc65aca6612a1a0.png'>
                                        </Card.Img>
                                    </a>
                                    <Row className='mt-2'>
                                        <Col xs={8}>
                                            <Card.Title>
                                                {name}
                                            </Card.Title>
                                            
                                        </Col>
                                            {
                                                rol == "Client" && (
                                                    <Col className='text-center'>
                                                    <Dropdown variant="outline-primary">
                                                        <Dropdown.Toggle></Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item>Eliminar</Dropdown.Item>
                                                            <Dropdown.Item>Editar</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                        </Col>
                                                )
                                            }
                                    </Row>
                                    <Row>
                                    <Card.Text className='mt-2'>
                                                {description}
                                            </Card.Text>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}
