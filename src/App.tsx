import { useState } from 'react';
import { Button, Container, Stack, TextField, Typography } from '@mui/material';
import Results from './Results';

function App() {
  const [initialAmount, setInitialAmount] = useState<number>(0);
  const [duration, setDuration] = useState<number>(1);
  const [interestRate, setInterestRate] = useState<number>(1);
  const [additionalContribution, setAdditionalContribution] = useState<number>(0);
  const [finalAmount, setFinalAmount] = useState<number>(0);

  const handleClick = () => {
    var amount: number = initialAmount * (1 + interestRate / 100);
    for (let i = 1; i < duration; i++) {
      amount = (amount + additionalContribution) * (1 + interestRate / 100);
    }
    setFinalAmount(parseFloat(amount.toFixed(2)));
  };

  return (
    <Container maxWidth='sm'>
      <Typography variant='h3' marginTop={3} style={{ textAlign: 'center' }}>
        AlgoCalc
      </Typography>
      <Typography variant='h5' marginBottom={3} style={{ textAlign: 'center' }}>
        Calculate your investment
      </Typography>
      <Stack spacing={2}>
        <TextField
          id='initial-amount'
          label='Initial amount'
          type='number'
          value={initialAmount}
          onChange={(event) => setInitialAmount(parseInt(event.target.value))}
        />
        <TextField
          id='duration'
          label='Duration (years)'
          type='number'
          value={duration}
          onChange={(event) => setDuration(parseFloat(event.target.value))}
        />
        <TextField
          id='interest-rate'
          label='Interest rate (%)'
          type='number'
          value={interestRate}
          onChange={(event) => setInterestRate(parseFloat(event.target.value))}
        />
        <TextField
          id='additional-contribution'
          label='Additional annual contribution'
          type='number'
          value={additionalContribution}
          onChange={(event) => setAdditionalContribution(parseFloat(event.target.value))}
        />
        <Button variant='contained' onClick={handleClick}>
          Submit
        </Button>
        <Results
          initialAmount={initialAmount}
          duration={duration}
          additionalContribution={additionalContribution}
          finalAmount={finalAmount}
        />
      </Stack>
    </Container>
  );
}

export default App;
