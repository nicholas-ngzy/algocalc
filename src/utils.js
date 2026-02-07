export function calculateTotalContribution(additionalContribution, duration) {
	return (additionalContribution * (duration - 1)).toFixed(2);
}

export function calculateFinalAmount(
	initialAmount,
	duration,
	interestRate,
	additionalContribution,
) {
	var amount = initialAmount * (1 + interestRate / 100);
	for (let i = 1; i < duration; i++) {
		amount = (amount + additionalContribution) * (1 + interestRate / 100);
	}
	return amount.toFixed(2);
}

export function calculateReturn(
	finalAmount,
	initialAmount,
	additionalContribution,
) {
	return (finalAmount - initialAmount - additionalContribution).toFixed(2);
}
