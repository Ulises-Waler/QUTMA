import React, { useState } from 'react';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';




export const AnswerQuestionnaire = ( {questionnaire} ) => {
    const [responses, setResponses] = useState(
        questionnaire.questions.map(() => "")
    );
    const [errors, setErrors] = useState([]);

    const handleResponseChange = (index, value) => {
        const updatedResponses = [...responses];
        updatedResponses[index] = value;
        setResponses(updatedResponses);
    };

    const validateResponses = () => {
        let validationErrors = [];
        questionnaire.questions.forEach((question, index) => {
            if (question.required && (!responses[index] || responses[index].trim() === "")) {
                validationErrors.push(`La pregunta "${question.title}" es obligatoria y debe ser respondida.`);
            }
        });
        setErrors(validationErrors);
        return validationErrors.length === 0;
    };

    const handleSubmit = () => {
        if (validateResponses()) {
            console.log("Respuestas enviadas:", responses);
            alert("Cuestionario enviado con éxito.");
        } else {
            alert("Por favor, complete todas las preguntas obligatorias.");
        }
    };

    return (
        <Container className="mt-4">
            <Card>
                <Card.Body>
                    <Card.Title>{questionnaire.title}</Card.Title>
                    <Card.Text>{questionnaire.description}</Card.Text>

                    {errors.length > 0 && (
                        <Alert variant="danger">
                            {errors.map((error, index) => (
                                <div key={index}>{error}</div>
                            ))}
                        </Alert>
                    )}

                    <Form>
                        {questionnaire.questions.map((question, index) => (
                            <Form.Group key={index} className="mb-3">
                                <Form.Label>{question.title} {question.required && <span style={{ color: 'red' }}>*</span>}</Form.Label>
                                
                                {question.type === "text" && (
                                    <Form.Control
                                        type="text"
                                        value={responses[index]}
                                        onChange={(e) => handleResponseChange(index, e.target.value)}
                                        placeholder="Escriba su respuesta"
                                    />
                                )}

                                {question.type === "multiple" && (
                                    <>
                                        {question.options.map((option, optIndex) => (
                                            <Form.Check
                                                type="radio"
                                                key={optIndex}
                                                label={option}
                                                name={`question-${index}`}
                                                onChange={(e) => handleResponseChange(index, option)}
                                            />
                                        ))}
                                    </>
                                )}
                            </Form.Group>
                        ))}
                    </Form>
                    <Button variant="success" onClick={handleSubmit}>
                        Enviar Cuestionario
                    </Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

