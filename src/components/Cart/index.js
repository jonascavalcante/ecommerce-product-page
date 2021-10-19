import { useContext } from 'react';
import { Container } from './styles';

import { ProductContext } from '../App';

import deleteIcon from '../../assets/icons/icon-delete.svg';

const Cart = () => {
  const { productsCart, handleRemoveProduct } = useContext(ProductContext);

  return (
    <Container>

      <h3>Cart</h3>

      {productsCart.map(({
        id, name, price, thumbnail, quantity,
      }) => (
        <div key={id} className="info">

          <img src={thumbnail} alt="thumbnail" />

          <div className="info__product">
            <p>{name}</p>
            <p>
              $
              {price.toFixed(2)}
              {' '}
              x
              {' '}
              {quantity}
              {' '}
              <span>
                $
                {(price * quantity).toFixed(2)}
              </span>
            </p>
          </div>

          <button onClick={() => handleRemoveProduct(id)} type="button">
            <img src={deleteIcon} alt="delete" />
          </button>

        </div>
      ))}

      {productsCart.length > 0
        ? <button className="checkout-button" type="button">Checkout</button>
        : <p className="cart-empty">Your cart is empty.</p>}

    </Container>
  );
};

export default Cart;
