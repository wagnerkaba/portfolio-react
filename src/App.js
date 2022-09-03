import {
  CssBaseline,
  ThemeProvider, 
  createTheme 
} from '@mui/material';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Projetos from './components/Projetos';
import SpeedDial from './components/SpeedDial';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <>
    {/* <ThemeProvider theme={darkTheme}> */}
      <CssBaseline />
      <SpeedDial />
      <Intro />

      <Projetos />
      <Footer />


      {/* </ThemeProvider> */}
      </>
  );
}

export default App;
