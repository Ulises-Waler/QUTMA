import React from 'react';
import QuestionnaireChart from './QuestionnaireChart';
import { Card, Container } from 'react-bootstrap';
import Header from './Header';

const UseComponent = () => {
    const questionnaire = {
        title: "Encuesta de Satisfacción",
        questions: [
            { title: "¿Te gustó el producto?", type: "multiple", options: ["Sí", "No"], required: true },
            { title: "¿Recomendarías nuestro servicio?", type: "multiple", options: ["Sí", "No", "Tal vez"], required: true },
            { title: "Comentarios adicionales", type: "text", required: false },
        ],
    };

    const responses = [
        ["Sí", "Sí", "Excelente"],
        ["No", "Tal vez", ""],
        ["Sí", "Sí", "Muy buen servicio"],
    ];

    return (
        <>
            <Container>
                <Card className='mt-3 mb-3' style={{ boxShadow: '0 4px 8px rgba(128,0,128,0.6)' }}>
                    <Card.Body>
                        <Card.Title>Resultados de la Encuesta</Card.Title>
                        <QuestionnaireChart questionnaire={questionnaire} responses={responses} />
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
};

export default UseComponent;