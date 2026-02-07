import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { calculateReturn, calculateTotalContribution } from 'utils';

const Results = (props) => {
	const { additionalContribution, duration, finalAmount, initialAmount } =
		props.info;

	var totalAdditionalContribution = calculateTotalContribution(
		additionalContribution,
		duration,
	);

	return (
		<Card>
			<CardHeader>
				<CardTitle>Results</CardTitle>
			</CardHeader>
			<CardContent>
				<p>Initial amount: {initialAmount.toFixed(2)}</p>
				<p>
					Total additional contribution: {totalAdditionalContribution}
				</p>
				<p>
					Total return:{' '}
					{calculateReturn(
						finalAmount,
						initialAmount,
						totalAdditionalContribution,
					)}
				</p>
				<p>Final amount: {finalAmount}</p>
			</CardContent>
		</Card>
	);
};

export default Results;
