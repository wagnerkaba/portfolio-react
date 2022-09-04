import {
  CssBaseline
} from '@mui/material';
import Home from './components/Home';
import { ProvideChangeTheme } from './components/ChangeTheme';


function App() {

  return (
    <ProvideChangeTheme >
      <CssBaseline />
      <Home />
    </ProvideChangeTheme>
  );
}

export default App;
