import React from "react";
import { useState } from "react";
import { Card, Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; 

export const Login = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate(); 

  const onChangeregister = (e) => {
    e.preventDefault();
    const nData = data; 
    nData[e.target.name] = e.target.value; 
    setData(nData);
    console.log(nData);
  };

  const onSubmit = () => {
    //Peticion a la BD xdXDxd
    console.log(data);
    navigate("/list-q")

  };

  
  return (
    <>
      <Container>
        <Card style={{boxShadow:'0 4px 8px rgba(128,0,128,0.6)'}} className="mt-3">
          <Card.Body>
            <Card.Title className="text-center">Inicio de Sesión</Card.Title>
            <Form>
              <Form.Group>
                <Form.Label>Correo</Form.Label>
                <Form.Control onChange={onChangeregister} name="email" type="text" placeholder="Escriba su correo electrónico"/> 
              </Form.Group>
              <Form.Group>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control onChange={onChangeregister} name="password" type="password" placeholder="Escriba su contraseña"/>
              </Form.Group>
              <Button className="mt-3" variant="primary" type="submit" onClick={() => onSubmit()}>Ingresar</Button>
              <Button className="mt-3 ms-2" variant="secondary"onClick={() => navigate("/register")}>Registrar</Button>
            </Form>
            <div className="mt-3"> 
            <Card.Link href="/recover-password">¿Olvidaste tu Contraseña?</Card.Link>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Login;
