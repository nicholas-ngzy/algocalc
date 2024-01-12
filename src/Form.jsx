import { InputAdornment, Stack, TextField } from '@mui/material';

const Form = (props) => {
    const { initialAmount, finalAmount, duration, interestRate, additionalContribution } = props.info;
    const goal = props.goal;

    const handleForm = (event) => {
        event.preventDefault();
        props.updateForm(event.target.name, event.target.value);
    };

    return (
        <Stack spacing={2}>
            <TextField
                id='initial-amount'
                inputProps={{
                    inputMode: 'decimal',
                    pattern: '([0-9]+)?[,\\.]?[0-9]*',
                    inputProps: {
                        min: 0,
                    },
                }}
                startAdornment={<InputAdornment position='start'>$</InputAdornment>}
                InputProps={{
                    startAdornment: <InputAdornment position='start'>$</InputAdornment>,
                }}
                label='Initial amount'
                name='initialAmount'
                onChange={handleForm}
                required
                type='number'
                value={initialAmount}
            />
            {goal !== 'final-amount' ? (
                <TextField
                    id='final-amount'
                    inputProps={{
                        inputMode: 'decimal',
                        pattern: '([0-9]+)?[,\\.]?[0-9]*',
                        inputProps: {
                            min: 0,
                        },
                    }}
                    InputProps={{
                        startAdornment: <InputAdornment position='start'>$</InputAdornment>,
                    }}
                    label='Final   amount'
                    name='finalAmount'
                    onChange={handleForm}
                    required
                    type='number'
                    value={finalAmount}
                />
            ) : null}
            {goal !== 'duration' ? (
                <TextField
                    id='duration'
                    inputProps={{
                        inputMode: 'decimal',
                        pattern: '([0-9]+)?[,\\.]?[0-9]*',
                        inputProps: {
                            min: 0.01,
                        },
                    }}
                    InputProps={{
                        endAdornment: <InputAdornment position='end'>years</InputAdornment>,
                    }}
                    label='Duration'
                    name='duration'
                    onChange={handleForm}
                    required
                    type='number'
                    value={duration}
                />
            ) : null}
            <TextField
                id='interest-rate'
                inputProps={{
                    inputMode: 'decimal',
                    pattern: '([0-9]+)?[,\\.]?[0-9]*',
                    inputProps: {
                        min: 1,
                    },
                }}
                InputProps={{
                    endAdornment: <InputAdornment position='end'>%</InputAdornment>,
                }}
                label='Interest rate'
                name='interestRate'
                onChange={handleForm}
                required
                type='number'
                value={interestRate}
            />
            {goal !== 'additional-contribution' ? (
                <TextField
                    id='additional-contribution'
                    inputProps={{
                        inputMode: 'decimal',
                        pattern: '([0-9]+)?[,\\.]?[0-9]*',
                        inputProps: {
                            min: 0,
                        },
                    }}
                    InputProps={{
                        startAdornment: <InputAdornment position='start'>$</InputAdornment>,
                    }}
                    label='Additional annual contribution'
                    name='additionalContribution'
                    onChange={handleForm}
                    required
                    type='number'
                    value={additionalContribution}
                />
            ) : null}
        </Stack>
    );
};

export default Form;
