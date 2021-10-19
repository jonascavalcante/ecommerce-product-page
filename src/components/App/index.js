import { useState, useCallback, createContext } from 'react';
import { ThemeProvider } from 'styled-components';

import defaultTheme from '../../assets/style/themes/defaultTheme';
import GlobalStyles from '../../assets/style/globalStyles';

import Header from '../Header';
import Slider from '../Slider';
import Main from '../Main';
import MenuMobile from '../MenuMobile';

import ProductPage from '../../pages';

import thumbnail from '../../assets/images/image-product-1-thumbnail.jpg';

export const ProductContext = createContext();

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

  const [productsCart, setProductCart] = useState([
    {
      id: 1, name: 'Autumn Limited Edition...', price: 125.00, thumbnail, quantity: 3,
    },
    {
      id: 2, name: 'Winter Limited Edition...', price: 225.00, thumbnail, quantity: 2,
    },
  ]);

  const handleRemoveProduct = (productId) => {
    const newProductsCart = [];
    setProductCart(
      (prevState) => (
        prevState.filter(
          (product) => ((product.id !== productId) ? newProductsCart.push(product) : ''),
        )
      ),
    );
  };

  return (
    <ProductContext.Provider value={{ productsCart, handleRemoveProduct }}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />

        <MenuMobile
          menuVisibility={menuMobileVisibility}
          handleMenuVisibility={handleMenuMobile}
        />
        <Header
          handleMenuVisibility={handleMenuMobile}
        />
        <ProductPage>
          <Slider />
          <Main />
        </ProductPage>

      </ThemeProvider>
    </ProductContext.Provider>
  );
}

export default App;
