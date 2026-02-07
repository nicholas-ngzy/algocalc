import { useState } from 'react';
import InputForm from './InputForm';
import Results from './Results';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { calculateFinalAmount } from 'utils';

function App() {
	const [goal, setGoal] = useState('final-amount');
	const [info, setInfo] = useState();
	const [showResults, setShowResults] = useState(false);

	const handleSubmit = (props) => {
		switch (goal) {
			case 'final-amount':
				var finalAmount = calculateFinalAmount(
					props.initialAmount,
					props.duration,
					props.interestRate,
					props.additionalContribution,
				);
				setInfo({
					initialAmount: props.initialAmount,
					duration: props.duration,
					interestRate: props.interestRate,
					additionalContribution: props.additionalContribution,
					finalAmount: finalAmount,
				});
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

	return (
		<div className='m-6 lg:w-3/4 xl:w-3/5 lg:justify-self-center'>
			<h1 className='text-3xl font-extrabold my-3'>Algocalc</h1>
			<Tabs
				defaultValue='final-amount'
				onValueChange={(value) => setGoal(value)}
			>
				<TabsList className='grid w-full grid-cols-2'>
					<TabsTrigger value='final-amount'>Final Amount</TabsTrigger>
					<TabsTrigger disabled value='duration'>
						Duration
					</TabsTrigger>
				</TabsList>
				<TabsContent value='final-amount'>
					<InputForm
						goal={goal}
						info={info}
						handleSubmit={handleSubmit}
					/>
				</TabsContent>
				<TabsContent value='duration'>
					<InputForm
						goal={goal}
						info={info}
						handleSubmit={handleSubmit}
					/>
				</TabsContent>
			</Tabs>
			<Separator className='my-4' />
			{showResults ? <Results info={info} /> : null}
			<p className='py-3'>
				&copy; 2026 Nicholas Ng. All rights reserved.
			</p>
		</div>
	);
}

export default App;
