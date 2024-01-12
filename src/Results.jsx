import { Card, Typography } from '@mui/material';

const Results = (props) => {
    const { additionalContribution, duration, finalAmount, initialAmount } = props.info;
    var totalAdditionalContribution = additionalContribution * (duration - 1);
    return (
        <Card>
            <Typography variant='body1' style={{ textAlign: 'center' }}>
                Final Amount: {finalAmount.toFixed(2)}
            </Typography>
            <Typography variant='body1' style={{ textAlign: 'center' }}>
                Total additional contribution: {totalAdditionalContribution.toFixed(2)}
            </Typography>
            <Typography variant='body1' style={{ textAlign: 'center' }}>
                Total gain: {(finalAmount - initialAmount - totalAdditionalContribution).toFixed(2)}
            </Typography>
        </Card>
    );
};

export default Results;
