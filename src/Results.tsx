import { Typography } from '@mui/material';

const Results = (props: { initialAmount: number; duration: number; finalAmount: number }) => {
  return (
    <div>
      <Typography variant='h5' style={{ textAlign: 'center' }}>
        Final Amount: {props.finalAmount.toFixed(2)}
      </Typography>
    </div>
  );
};

export default Results;
