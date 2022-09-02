import {
  CssBaseline
} from '@mui/material';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Projetos from './components/Projetos';
import SpeedDial from './components/SpeedDial';
import Menu from './components/Menu';



function App() {
  return (
    <>
      <CssBaseline />
      {/* <Menu/> */}
      {/* <SpeedDial /> */}
      <Intro />

      <Projetos />
      <Footer />


    </>
  );
}

export default App;
