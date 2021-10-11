import { ThemeProvider } from 'styled-components';

import defaultTheme from '../../assets/style/themes/defaultTheme';
import GlobalStyles from '../../assets/style/globalStyles';
import Header from '../Header';

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />

        <Header />

      </ThemeProvider>
    </>
  );
}

export default App;
