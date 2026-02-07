import {
	calculateFinalAmount,
	calculateReturn,
	calculateTotalContribution,
} from './utils';

test('Total contibution after 1 year', () => {
	expect(calculateTotalContribution(1000, 1)).toBe('0.00');
});

test('Total contibution after 5 years', () => {
	expect(calculateTotalContribution(1000, 5)).toBe('4000.00');
});

test('Total contibution should be only 2 decimal places', () => {
	expect(calculateTotalContribution(1000.111, 5)).toBe('4000.44');
});

test('Final amount after 1 year', () => {
	expect(calculateFinalAmount(1000, 1, 10, 0)).toBe('1100.00');
});

test('Final amount after 5 years without additional contribution', () => {
	expect(calculateFinalAmount(1000, 5, 3, 0)).toBe('1159.27');
});

test('Final amount after 5 years with additional contribution', () => {
	expect(calculateFinalAmount(1000, 5, 5, 500)).toBe('3539.10');
});

test('Total return', () => {
	expect(calculateReturn(3539.1, 1000, 2000)).toBe('539.10');
});
