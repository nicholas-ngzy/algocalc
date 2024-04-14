import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const formSchema = z.object({
    initialAmount: z.coerce
        .number({
            required_error: 'Initial amount is required',
            invalid_type_error: 'Initial amount must be a number',
        })
        .gte(0, 'Initial amount must be a positive number'),
    // finalAmount: z.coerce
    //     .number({
    //         required_error: 'Final amount is required',
    //         invalid_type_error: 'Final amount must be a number',
    //     })
    //     .gt(0, 'Final amount must be more than 0'),
    duration: z.coerce
        .number({
            required_error: 'Duration is required',
            invalid_type_error: 'Duration must be a number',
        })
        .gte(1, 'Duration must be more than 0'),
    interestRate: z.coerce
        .number({
            required_error: 'Interest rate is required',
            invalid_type_error: 'Interest rate must be a number',
        })
        .gt(0, 'Interest rate must be more than 0'),
    additionalContribution: z.coerce
        .number({
            required_error: 'Additional contribution is required',
            invalid_type_error: 'Additional contribution must be a number',
        })
        .nonnegative('Additional contribution must be a positive number'),
});

const InputForm = (props) => {
    const goal = props.goal;
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            initialAmount: 1000,
            // finalAmount: 0,
            duration: 1,
            interestRate: 1,
            additionalContribution: 0,
        },
    });

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(props.handleSubmit)}>
                <FormField
                    control={form.control}
                    name='initialAmount'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Initial Amount</FormLabel>
                            <FormControl>
                                <Input type='number' placeholder='1000' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {goal === 'final-amount' ? null : (
                    <FormField
                        control={form.control}
                        name='finalAmount'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Final Amount</FormLabel>
                                <FormControl>
                                    <Input placeholder='0' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                )}
                <FormField
                    control={form.control}
                    name='duration'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Duration</FormLabel>
                            <FormControl>
                                <Input placeholder='1' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='interestRate'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Interest rate</FormLabel>
                            <FormControl>
                                <Input placeholder='1' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='additionalContribution'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Additional contribution</FormLabel>
                            <FormControl>
                                <Input placeholder='0' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className='flex items-center my-4'>
                    <Button type='submit' className='flex-1'>
                        Calculate
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export default InputForm;
