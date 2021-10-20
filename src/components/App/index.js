import {
  useState, useCallback, createContext, useEffect,
} from 'react';
import { ThemeProvider } from 'styled-components';

import defaultTheme from '../../assets/style/themes/defaultTheme';
import GlobalStyles from '../../assets/style/globalStyles';

import Header from '../Header';
import Slider from '../Slider';
import Main from '../Main';
import MenuMobile from '../MenuMobile';
import ProductPage from '../../pages/ProductPage';

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

  const [products] = useState([
    {
      id: 1, name: 'Autumn Limited Edition...', price: 250.00, thumbnail, quantity: 3, discount: 0.5,
    },
    {
      id: 2, name: 'Winter Limited Edition...', price: 100.00, thumbnail, quantity: 2, discount: 0.25,
    },
  ]);

  const [productsCart, setProductCart] = useState([]);
  const [productsCartQuantity, setProductsCartQuantity] = useState(0);

  useEffect(() => {
    let newProductQuantity = 0;

    productsCart.forEach((product) => {
      newProductQuantity += product.quantity;
    });

    setProductsCartQuantity(newProductQuantity);
  }, [productsCart]);

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

  const handleAddProductsToCart = (productId, productQuantity) => {
    const newProducts = [];

    if (productQuantity > 0) {
      products.map(
        (product) => ((product.id === productId)
          ? newProducts.push({ ...product, quantity: productQuantity })
          : ''),
      );
    }

    setProductCart(newProducts);
  };

  return (
    <ProductContext.Provider value={{
      products, productsCart, handleRemoveProduct, handleAddProductsToCart,
    }}
    >
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />

        <MenuMobile
          menuVisibility={menuMobileVisibility}
          handleMenuVisibility={handleMenuMobile}
        />
        <Header
          handleMenuVisibility={handleMenuMobile}
          productsCartQuantity={productsCartQuantity}
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
