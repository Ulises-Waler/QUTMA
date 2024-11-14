import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";
import { Pencil, Trash } from "react-bootstrap-icons";

export const ListUsers = () => {

const [users, setUsers] = useState([])

useEffect(() => {
  getUser();
}, [])


    const getUser = () => {
        const users = [
        { name: 'Angel', ap: 'Padilla', correo: 'utm23090741@utma.edu.mx' },
        { name: 'Itzel', ap: 'Rivera', correo: 'utm23090687@utma.edu.mx' },
        { name: 'Erik', ap: 'Barba', correo: 'utm23090777@utma.edu.mx' },
        { name: 'Ulises', ap: 'Okkotsu', correo: 'utm23090479@utma.edu.mx' }

    ];
    setUsers(users)
}

    const [newUser, setNewUser] = useState({ name: '', ap: '', correo: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value });
    };

    const handleAddUser = () => {
        setUsers([...users, newUser]);
        setNewUser({ name: '', ap: '', correo: '' });
    };

    return (
        <>
            <Container>
                <Card style={{ boxShadow: '0 4px 8px rgba(128,0,128,0.6)' }} className="mt-3">
                    <Card.Body>
                        <Card.Title>Lista de Usuarios</Card.Title>
                        <Table striped bordered hover variant="dark" className="mt-4">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Correo</th>
                                    <th>Opciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users?.map((user, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.ap}</td>
                                        <td>{user.correo}</td>
                                        <td>
                                            <Row className="text-center">
                                                <Col>
                                                    <Button>
                                                        <Pencil />
                                                    </Button>
                                                </Col>
                                                <Col>
                                                    <Button variant="danger">
                                                        <Trash />
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Container>

            <Container>
                <Card style={{ boxShadow: '0 4px 8px rgba(0, 255, 255, 0.8)' }} className="mt-3 mb-4">
                    <Card.Body>
                        <Card.Title>Agregar Usuario</Card.Title>
                        <h2>Agregar Nuevo Usuario</h2>
                        <Card className="mt-3">
                            <input
                                type="text"
                                name="name"
                                placeholder="Nombre"
                                value={newUser.name}
                                onChange={handleInputChange}
                                className="mt-2"
                            />
                            <input
                                type="text"
                                name="ap"
                                placeholder="Apellido"
                                value={newUser.ap}
                                onChange={handleInputChange}
                                className="mt-2"
                            />
                            <input
                                type="email"
                                name="correo"
                                placeholder="Correo"
                                value={newUser.correo}
                                onChange={handleInputChange}
                                className="mt-2"
                            />
                        </Card>
                        <div className="text-end">
                            <Button className="mt-3" variant="success" onClick={handleAddUser}>Agregar Usuario</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
};

export default ListUsers;
