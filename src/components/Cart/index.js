import { Container } from './styles';

import thumbnail from '../../assets/images/image-product-1-thumbnail.jpg';
import deleteIcon from '../../assets/icons/icon-delete.svg';

const Cart = () => (
  <Container>

    <h3>Cart</h3>

    <div className="info">

      <img src={thumbnail} alt="thumbnail" />

      <div className="info__product">
        <p>Autumn Limited Edition...</p>
        <p>
          $125.00 x
          {' '}
          <span>$375.00</span>
        </p>
      </div>

      <button type="button">
        <img src={deleteIcon} alt="delete" />
      </button>

    </div>

    <button className="checkout-button" type="button">
      Checkout
    </button>

  </Container>
);

export default Cart;
