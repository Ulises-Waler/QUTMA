import React, { useState } from "react";
import { Button, Card, Container, Form, Row, Col, OverlayTrigger, Tooltip, CloseButton } from "react-bootstrap";

export const CreateQuestionnaire = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [questions, setQuestions] = useState([
        { title: "", type: "text", options: [""], required: false },
    ]);

    const handleSubmit = () => {
        const questionnaire = {
            title,
            description,
            questions,
        };
        console.log("Cuestionario creado:", questionnaire);
    };

    const handleQuestionChange = (index, field, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index][field] = value;
        setQuestions(updatedQuestions);
    };

    const handleOptionChange = (questionIndex, optionIndex, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[questionIndex].options[optionIndex] = value;
        setQuestions(updatedQuestions);
    };

    const addOption = (index) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].options.push("");
        setQuestions(updatedQuestions);
    };

    const removeOption = (index, optionIndex) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].options = updatedQuestions[index].options.filter((_, optIdx) => optIdx !== optionIndex); // Filtra la opción a eliminar
        setQuestions(updatedQuestions);
    };

    const addQuestion = () => {
        setQuestions((prevQuestions) => [
            ...prevQuestions,
            { title: "", type: "text", options: [""], required: false },
        ]);
    };

    const removeQuestion = (index) => {
        const updatedQuestions = questions.filter((_, qIndex) => qIndex !== index);
        setQuestions(updatedQuestions);
    };

    const handleQuestionTypeChange = (index, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].type = value;
        if (value === "multiple" && updatedQuestions[index].options.length === 1 && updatedQuestions[index].options[0] === "") {
            updatedQuestions[index].options = [""];
        }
        setQuestions(updatedQuestions);
    };
    return (
        <>
      <Container>
                <Card  style={{boxShadow:'0 4px 8px rgba(128,0,128,0.6)'}} className="mt-3"                                 
                >
                    <Card.Body>
                        <Card.Title>{title || "Crear Cuestionario"}</Card.Title>
                        <Form.Group className="mb-3">
                            <Form.Label>Título del Cuestionario</Form.Label>
                            <Form.Control
                                style={{ border: '1px solid' }}

                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Ingrese el título"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control
                                style={{ border: '1px solid ' }}

                                as="textarea"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Ingrese la descripción"
                            />
                        </Form.Group>
                    </Card.Body>
                </Card>
                {questions.map((question, index) => (
                    <Card className="mt-3" key={index} style={{boxShadow:'0 4px 8px rgba(0, 255, 255, 0.8)'}}>
                        <Card.Body>
                            <div className="text-end">
                                {index > 0 && (
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={<Tooltip>Eliminar pregunta</Tooltip>}
                                    >
                                        <CloseButton
                                            variant="outline"
                                            onClick={() => removeQuestion(index)}
                                            className="mt-2"
                                            style={{ color: "black" }}
                                        >
                                        </CloseButton>
                                    </OverlayTrigger>
                                )}
                            </div>

                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Título de la Pregunta</Form.Label>
                                        <Form.Control
                                            style={{ border: '1px solid ' }}
                                            type="text"
                                            value={question.title}
                                            onChange={(e) =>
                                                handleQuestionChange(index, "title", e.target.value)
                                            }
                                            placeholder="Ingrese la pregunta"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Tipo de Pregunta</Form.Label>
                                        <Form.Select
                                            style={{ border: '1px solid' }}

                                            value={question.type}
                                            onChange={(e) => handleQuestionTypeChange(index, e.target.value)}
                                        >
                                            <option value="text">Texto</option>
                                            <option value="multiple">Selección Múltiple</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>

                            {question.type === "multiple" && (
                                <>
                                    <h5 className="mt-3">Opciones</h5>
                                    {question.options.map((option, optIndex) => (
                                        <div key={optIndex} className="d-flex align-items-center">
                                            <Form.Control
                                                style={{ border: '1px solid ' }}

                                                type="text"
                                                value={option}
                                                onChange={(e) =>
                                                    handleOptionChange(index, optIndex, e.target.value)
                                                }
                                                placeholder={`Opción ${optIndex + 1}`}
                                                className="me-2 mt-2"
                                            />
                                            {question.options.length > 1 && (
                                                <OverlayTrigger
                                                    overlay={<Tooltip>Eliminar opción</Tooltip>}
                                                >
                                                    <Button
                                                        variant="outline-danger"
                                                        onClick={() => removeOption(index, optIndex)}
                                                    >
                                                        X
                                                    </Button>
                                                </OverlayTrigger>
                                            )}
                                        </div>
                                    ))}
                                    <Button
                                        variant="secondary"
                                        className="mt-2"
                                        onClick={() => addOption(index)}
                                    >
                                        Agregar Opción
                                    </Button>
                                </>
                            )}

                            <Form.Check
                            
                                type="checkbox"
                                label="Pregunta obligatoria"
                                checked={question.required}
                                onChange={(e) =>
                                    handleQuestionChange(index, "required", e.target.checked)
                                }
                                className="mt-3"    
                            />
                        </Card.Body>
                    </Card>
                ))}

                <div className="d-flex justify-content-between mt-3">
                    <Button variant="primary" onClick={addQuestion}>
                        Agregar Pregunta
                    </Button>
                    <Button variant="success" onClick={handleSubmit}>
                        Crear Cuestionario
                    </Button>
                </div>
            </Container>
        </>
    );
};

