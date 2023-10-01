import { useState } from 'react';
import { Button, Container, Stack, TextField, Typography } from '@mui/material';
import Results from './Results';

function App() {
  const [initialAmount, setInitialAmount] = useState<number>(0);
  const [duration, setDuration] = useState<number>(1);
  const [interestRate, setInterestRate] = useState<number>(1);
  const [finalAmount, setFinalAmount] = useState<number>(0);

  const handleClick = () => {
    var amount: number = initialAmount * Math.pow(1 + interestRate / 100, duration);
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
        <Button variant='contained' onClick={handleClick}>
          Submit
        </Button>
        <Results initialAmount={initialAmount} duration={duration} finalAmount={finalAmount} />
      </Stack>
    </Container>
  );
}

export default App;
