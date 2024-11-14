import React, { useState } from 'react'
import { Card, Container,} from 'react-bootstrap'
import { ListQuestionnaires } from './ListQuestionnaires';

export const ShowQuestionnaires = () => {

    const user = JSON.parse(localStorage.user);
    const [questionnaires, setQuestionnaires] = useState([]);


  return (
    <Container>
        <Card className='mt-4 mb-4' style={{boxShadow:'0 4px 8px rgba(128,0,128,0.6)'}}>
            <Card.Body>
                <Card.Title>{user.rol == "Administrator" ? "Cuestionarios Creados" : "Tus Cuestionarios"}
                </Card.Title>
                <Card.Text>Formularios Recientes:</Card.Text>
                <ListQuestionnaires rol={user.rol}/>
            </Card.Body>
        </Card>
    </Container>
  )
}
