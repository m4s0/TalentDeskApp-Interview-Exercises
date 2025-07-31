import {createTheme} from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#61dafb',
            light: '#4dc5e6',
            dark: '#3ba8c9',
        },
        secondary: {
            main: '#282c34',
            dark: '#363a43',
        },
        success: {
            main: 'rgba(255,79,0,0.79)',
        },
        background: {
            default: '#282c34',
            paper: '#363a43',
        },
        text: {
            primary: '#ffffff',
            secondary: 'rgba(255, 255, 255, 0.7)',
        },
        error: {
            main: '#ff6b6b',
        },
        divider: '#4a4f59',
        action: {
            hover: 'rgba(97, 218, 251, 0.08)',
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h4: {
            fontWeight: 600,
            fontSize: '2rem',
        },
        h5: {
            fontWeight: 500,
            fontSize: '1.5rem',
        },
        button: {
            textTransform: 'none',
            fontWeight: 500,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 4,
                    padding: '12px 24px',
                    fontSize: '1rem',
                    fontWeight: 500,
                    transition: 'background-color 0.2s',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        backgroundColor: '#2c3038',
                        '& fieldset': {
                            borderColor: '#4a4f59',
                        },
                        '&:hover fieldset': {
                            borderColor: '#61dafb',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#61dafb',
                        },
                    },
                },
            },
        },
    },
});