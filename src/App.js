import { ThemeProvider } from 'styled-components';

import defaultTheme from './assets/style/themes/defaultTheme';
import GlobalStyles from './assets/style/globalStyles';

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />

        This text will be deleted
      </ThemeProvider>
    </>
  );
}

export default App;
