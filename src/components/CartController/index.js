import { useContext, useState } from 'react';
import { Container } from './styles';

import minus from '../../assets/icons/icon-minus.svg';
import plus from '../../assets/icons/icon-plus.svg';
import CartIcon from '../svgComponents/CartIcon';

import { ProductContext } from '../App';

const CartController = () => {
  const { products, handleAddProductsToCart } = useContext(ProductContext);

  const [productId] = useState(1);
  const [productQuantity, setProductQuantity] = useState(0);

  function handleProductQuantity(buttonValue) {
    setProductQuantity(
      (prevState) => {
        if (buttonValue === 'minus' && prevState > 0) {
          return prevState - 1;
        }
        if (buttonValue === 'plus') {
          return prevState + 1;
        }
        return prevState;
      },
    );
  }

  function handleClickCheckout() {
    handleAddProductsToCart(productId, productQuantity);
    setProductQuantity(0);
  }

  return (
    <Container>

      <div className="price">
        <span className="price__new">
          $
          {(products[productId - 1].price * products[productId - 1].discount).toFixed(2)}
        </span>
        <span className="price__percentage-discount">
          {products[productId - 1].discount * 100}
          %
        </span>
        <span className="price__old">
          $
          {(products[productId - 1].price).toFixed(2)}
        </span>
      </div>

      <div className="quantity-controll">

        <button onClick={() => handleProductQuantity('minus')} type="button" className="minus">
          <img src={minus} alt="minus" />
        </button>

        <span>{productQuantity}</span>

        <button onClick={() => handleProductQuantity('plus')} type="button" className="plus">
          <img src={plus} alt="plus" />
        </button>

      </div>

      {productQuantity
        ? (
          <button onClick={() => handleClickCheckout()} type="button" className="add-to-cart">
            <CartIcon />
            Add to cart
          </button>
        )
        : (
          <button disabled onClick={() => handleClickCheckout()} type="button" className="add-to-cart">
            <CartIcon />
            Add to cart
          </button>
        )}

    </Container>
  );
};
export default CartController;
