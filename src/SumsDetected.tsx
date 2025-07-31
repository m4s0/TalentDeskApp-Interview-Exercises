import React, {useState} from 'react';
import {Box, Paper, Typography} from '@mui/material';
import {SumDetected} from "./types/sum-detected";

export function SumsDetected(props: { numbers: [] | number[], sumsDetected: [] | SumDetected[] }) {
    const {numbers, sumsDetected} = props;
    const [highlightedAddendIndices, setHighlightedAddendIndices] = useState<number[]>([]);
    const [highlightedSumIndex, setHighlightedSumIndex] = useState<number | null>(null);

    const handleMouseEnter = (result: SumDetected) => {
        setHighlightedAddendIndices([result.pA, result.pB]);
        setHighlightedSumIndex(result.sum);
    };

    const handleMouseLeave = () => {
        setHighlightedAddendIndices([]);
        setHighlightedSumIndex(null);
    };

    return (
        <Box sx={{mt: 3, height: '100%', display: 'flex', flexDirection: 'column'}}>
            {/* Fixed Numbers Row */}
            <Box sx={{position: 'sticky', top: 0, zIndex: 1, pb: 2}}>
                <Paper
                    elevation={3}
                    sx={{
                        p: 2,
                        mb: 2,
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <Box sx={{
                        display: 'flex',
                        border: '1px solid',
                        borderColor: 'divider',
                        borderRadius: 1,
                        overflow: 'hidden'
                    }}>
                        {numbers.map((num, index) => (
                            <Box
                                key={`${num}-${index}`}
                                sx={{
                                    width: '40px',
                                    height: '40px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor:
                                        highlightedSumIndex === index
                                            ? 'success.main'
                                            : highlightedAddendIndices.includes(index)
                                                ? 'primary.light'
                                                : 'background.paper',
                                    transition: 'background-color 0.3s ease',
                                    borderRight: index < numbers.length - 1 ? '1px solid' : 'none',
                                    borderColor: 'divider'
                                }}
                            >
                                {num}
                            </Box>
                        ))}
                    </Box>
                </Paper>
            </Box>

            {/* Scrollable Results List */}
            <Box sx={{
                flexGrow: 1,
                overflow: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: 1
            }}>
                {sumsDetected.map((result, index) => (
                    <Paper
                        key={index}
                        elevation={2}
                        onMouseEnter={() => handleMouseEnter(result)}
                        onMouseLeave={handleMouseLeave}
                        sx={{
                            p: 2,
                            cursor: 'pointer',
                            '&:hover': {
                                backgroundColor: 'action.hover',
                            },
                        }}
                    >
                        <Typography>
                            {numbers[result.pA]} + {numbers[result.pB]} = {numbers[result.sum]}
                        </Typography>
                    </Paper>
                ))}

                {sumsDetected.length === 0 && (
                    <Typography color="text.secondary">
                        No valid combinations found
                    </Typography>
                )}
            </Box>
        </Box>
    );
}