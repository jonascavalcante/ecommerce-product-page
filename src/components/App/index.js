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

import product1 from '../../assets/images/image-product-1.jpg';
import product2 from '../../assets/images/image-product-2.jpg';
import product3 from '../../assets/images/image-product-3.jpg';
import product4 from '../../assets/images/image-product-4.jpg';

import thumbnail1 from '../../assets/images/image-product-1-thumbnail.jpg';
import thumbnail2 from '../../assets/images/image-product-2-thumbnail.jpg';
import thumbnail3 from '../../assets/images/image-product-3-thumbnail.jpg';
import thumbnail4 from '../../assets/images/image-product-4-thumbnail.jpg';

export const ProductContext = createContext();

function App() {
  const [products] = useState([
    {
      id: 1,
      name: 'Autumn Limited Edition...',
      company: 'SNEAKER COMPANY',
      title: 'Fall Limited Edition Sneakers',
      description: 'These low-profile sneakers are your perfect casual wear  companion. featuring a durable rubber outer sole, they&apos;ll withstand everything the weather can offer.',
      price: 250.00,
      images: [product1, product2, product3, product4],
      thumbnails: [thumbnail1, thumbnail2, thumbnail3, thumbnail4],
      discount: 0.5,
    },
  ]);
  const [productsCart, setProductCart] = useState([]);
  const [productsCartQuantity, setProductsCartQuantity] = useState(0);
  const [menuMobileVisibility, setMenuMobileVisibility] = useState(false);

  useEffect(() => {
    let newProductQuantity = 0;

    productsCart.forEach((product) => {
      newProductQuantity += product.quantity;
    });

    setProductsCartQuantity(newProductQuantity);
  }, [productsCart]);

  const handleAddProductsToCart = useCallback((productId, productQuantity) => {
    const newProducts = [];

    if (productQuantity > 0) {
      products.map(
        (product) => ((product.id === productId)
          ? newProducts.push({ ...product, quantity: productQuantity })
          : ''),
      );
    }

    setProductCart(newProducts);
  }, []);

  const handleRemoveProduct = useCallback((productId) => {
    const newProductsCart = [];
    setProductCart(
      (prevState) => (
        prevState.filter(
          (product) => ((product.id !== productId) ? newProductsCart.push(product) : ''),
        )
      ),
    );
  }, []);

  const handleMenuMobile = useCallback(() => {
    setMenuMobileVisibility((prevState) => {
      if (prevState) {
        return false;
      }

      return true;
    });
  }, []);

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
