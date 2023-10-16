import { Typography } from '@mui/material';

const Results = (props: {
  initialAmount: number;
  duration: number;
  additionalContribution: number;
  finalAmount: number;
}) => {
  var totalAdditionalContribution: number = props.additionalContribution * (props.duration - 1);
  return (
    <div>
      <Typography variant='h5' style={{ textAlign: 'center' }}>
        Final Amount: {props.finalAmount.toFixed(2)}
      </Typography>
      <Typography variant='h5' style={{ textAlign: 'center' }}>
        Total additional contribution: {totalAdditionalContribution.toFixed(2)}
      </Typography>
      <Typography variant='h5' style={{ textAlign: 'center' }}>
        Total gain: {(props.finalAmount - props.initialAmount - totalAdditionalContribution).toFixed(2)}
      </Typography>
    </div>
  );
};

export default Results;
