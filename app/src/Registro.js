import React, { useState } from "react";
import { Card, Container, Form, Button } from "react-bootstrap";

export const Registro = () => {
  const [data, setData] = useState({})

  const onChangeRegister = (e) => {
    e.preventDefault();
    const nData = data;
    nData[e.target.name] = e.target.value;
    setData(nData);
    console.log(nData)
  };

  const onsubmit = () => {
    //Envía datos al server xdxdxdx
    console.log(data)
    window.location.href = "/"
  }


  return (
    <Container>
      <Card className="mt-3" style={{boxShadow:'0 4px 8px rgba(128,0,128,0.6)'}}>
        <Card.Body>
          <Card.Title className="text-center">Registro de Usuario</Card.Title>
          <Form>
            <Form.Group>
              <Form.Label>Nombre</Form.Label>
              <Form.Control onChange={onChangeRegister} name="name" placeholder="Escriba su Nombre" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Apellido</Form.Label>
              <Form.Control onChange={onChangeRegister} name="last_name" placeholder="Escriba su Apellido" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Correo</Form.Label>
              <Form.Control onChange={onChangeRegister} name="email" type="email" placeholder="Escriba su correo electronico" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Contraseña</Form.Label>
              <Form.Control onChange={onChangeRegister} name="password" type="password" placeholder="Escriba su contraseña" />
            </Form.Group>
            <Button onClick={() => onsubmit()} className="mt-3" variant="primary">Registrar</Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

