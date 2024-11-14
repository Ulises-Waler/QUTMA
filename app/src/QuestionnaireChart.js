import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const QuestionnaireChart = ({ questionnaire, responses }) => {
    const data = {
        labels: questionnaire.questions.map((q) => q.title),
        datasets: [
            {
                label: 'Número de respuestas',
                data: responses.map((response, index) => {
                    return response ? 1 : 0; 
                }),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default QuestionnaireChart;