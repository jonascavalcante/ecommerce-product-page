import { useState, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';

import defaultTheme from '../../assets/style/themes/defaultTheme';
import GlobalStyles from '../../assets/style/globalStyles';
import Header from '../Header';
import Slider from '../Slider';
import Main from '../Main';
import MenuMobile from '../MenuMobile';

function App() {
  const [menuMobileVisibility, setMenuMobileVisibility] = useState(false);

  const handleMenuMobile = useCallback(() => {
    setMenuMobileVisibility((prevState) => {
      if (prevState) {
        return false;
      }

      return true;
    });
  }, []);

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />

        <MenuMobile
          menuVisibility={menuMobileVisibility}
          handleMenuVisibility={handleMenuMobile}
        />
        <Header
          handleMenuVisibility={handleMenuMobile}
        />
        <Slider />
        <Main />

      </ThemeProvider>
    </>
  );
}

export default App;
