import * as React from 'react';
import {
  ThemeProvider,
  createTheme
} from '@mui/material';
const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

function useChangeTheme() {
    return React.useContext(ColorModeContext);
}

function ProvideChangeTheme({ children }) {
    const [mode, setMode] = React.useState('light');

    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export { useChangeTheme, ProvideChangeTheme };