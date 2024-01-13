import { useState } from 'react';
import { Button, Container, Stack, Typography } from '@mui/material';
import Options from './Options';
import Form from './Form';
import Results from './Results';

function App() {
    const [goal, setGoal] = useState('final-amount');
    const [info, setInfo] = useState({
        initialAmount: '0',
        duration: '0',
        interestRate: '0',
        additionalContribution: '0',
        finalAmount: '0',
    });
    const [showResults, setShowResults] = useState(false);

    const handleSubmit = () => {
        switch (goal) {
            case 'final-amount':
                var amount = info.initialAmount * (1 + info.interestRate / 100);
                for (let i = 1; i < info.duration; i++) {
                    amount =
                        (parseFloat(amount) + parseFloat(info.additionalContribution)) * (1 + info.interestRate / 100);
                }
                setInfo({ ...info, finalAmount: amount });
                break;
            default:
                setInfo({
                    initialAmount: 0,
                    duration: 0,
                    interestRate: 0,
                    additionalContribution: 0,
                    finalAmount: 0,
                });
                break;
        }
        setShowResults(true);
    };

    const updateGoal = (newGoal) => {
        setGoal(newGoal);
        setShowResults(false);
    };

    const updateForm = (name, value) => {
        setInfo({ ...info, [name]: value });
        setShowResults(false);
    };

    return (
        <Container maxWidth='sm'>
            <Stack spacing={2}>
                <Typography variant='h3' marginTop={3} style={{ textAlign: 'center' }}>
                    AlgoCalc
                </Typography>
                <Typography variant='h5' marginBottom={2} style={{ textAlign: 'center' }}>
                    Calculate your investment
                </Typography>
                <Options goal={goal} updateGoal={updateGoal} />
                <Form goal={goal} info={info} updateForm={updateForm} />
                <Button variant='contained' onClick={handleSubmit}>
                    Submit
                </Button>
                {showResults ? <Results info={info} /> : null}
            </Stack>
        </Container>
    );
}

export default App;
