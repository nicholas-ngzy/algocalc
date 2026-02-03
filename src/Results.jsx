import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Results = (props) => {
    const { additionalContribution, duration, finalAmount, initialAmount } = props.info;
    var totalAdditionalContribution = additionalContribution * (duration - 1);
    return (
        <Card>
            <CardHeader>
                <CardTitle>Calculation</CardTitle>
            </CardHeader>
            <CardContent>
                <p>Final Amount: {finalAmount.toFixed(2)}</p>
                <p>Total additional contribution: {totalAdditionalContribution.toFixed(2)}</p>
                <p>Total gain: {(finalAmount - initialAmount - totalAdditionalContribution).toFixed(2)}</p>
            </CardContent>
        </Card>
    );
};

export default Results;
