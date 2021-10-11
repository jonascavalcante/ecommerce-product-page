import { ThemeProvider } from 'styled-components';

import defaultTheme from '../../assets/style/themes/defaultTheme';
import GlobalStyles from '../../assets/style/globalStyles';
import Header from '../Header';
import Slider from '../Slider';

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />

        <Header />
        <Slider />

      </ThemeProvider>
    </>
  );
}

export default App;
