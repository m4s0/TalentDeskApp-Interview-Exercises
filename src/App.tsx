import React, {FormEvent, useState} from 'react';
import {
    Box,
    Button,
    CircularProgress,
    Container,
    CssBaseline,
    FormControl,
    InputLabel,
    TextField,
    ThemeProvider,
    Typography
} from "@mui/material";
import {SumDetected} from "./types/sum-detected";
import {SumsDetected} from "./SumsDetected";
import {theme} from "./theme";
import {detectSums, validateAndConvertInput} from "./utils";

function App() {
    const [input, setInput] = useState('');
    const [numbers, setNumbers] = useState<[] | number[]>([]);
    const [results, setResults] = useState<[] | SumDetected[]>([]);
    const [error, setError] = useState<null | string>(null);
    const [isLoading, setIsLoading] = useState(false);

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setError(null);
        setNumbers([]);
        setResults([]);
        setIsLoading(true);

        try {
            const numbers = validateAndConvertInput(input);
            setNumbers(numbers);

            await new Promise(resolve => setTimeout(resolve, 1));
            const result = detectSums(numbers);

            setResults(result);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Invalid input');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Container maxWidth="md" sx={{mt: 4}}>
                <Box sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    py: 4
                }}>
                    <Typography variant="h4" component="h1" sx={{mb: 4}}>
                        Sum Detector
                    </Typography>

                    <Box component="form" role="form" onSubmit={handleSubmit} sx={{width: '100%', maxWidth: 500}}>
                        <FormControl fullWidth sx={{mb: 2}}>
                            <InputLabel shrink htmlFor="numbers-input">
                                Enter numbers (comma or space separated)
                            </InputLabel>
                            <TextField
                                id="numbers-input"
                                value={input}
                                onChange={(e) => {
                                    setError(null);
                                    setNumbers([]);
                                    setResults([]);
                                    setInput(e.target.value);
                                }}
                                placeholder="1, 2, 3 or 1 2 3"
                                variant="outlined"
                                fullWidth
                                margin="dense"
                                disabled={isLoading}
                            />
                        </FormControl>

                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            disabled={isLoading}
                            sx={{
                                mb: 3,
                                position: 'relative',
                                minHeight: '36px'
                            }}
                        >
                            {isLoading ? (
                                <CircularProgress
                                    color="secondary"
                                    size={24}
                                    sx={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        marginTop: '-12px',
                                        marginLeft: '-12px'
                                    }}
                                />
                            ) : 'Calculate'}
                        </Button>
                    </Box>

                    {error && (
                        <Typography variant="h6" color="error" sx={{mb: 2}}>
                            {error}
                        </Typography>
                    )}

                    {(!error && !isLoading && results.length > 0) &&
                        <SumsDetected numbers={numbers} sumsDetected={results}/>}
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default App;
