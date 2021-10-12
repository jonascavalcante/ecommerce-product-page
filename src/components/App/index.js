import { ThemeProvider } from 'styled-components';

import defaultTheme from '../../assets/style/themes/defaultTheme';
import GlobalStyles from '../../assets/style/globalStyles';
import Header from '../Header';
import Slider from '../Slider';
import Main from '../Main';

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />

        <Header />
        <Slider />
        <Main />

      </ThemeProvider>
    </>
  );
}

export default App;
