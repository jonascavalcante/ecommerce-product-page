import { Container } from './styles';

import minus from '../../assets/icons/icon-minus.svg';
import plus from '../../assets/icons/icon-plus.svg';
import CartSvg from './CartSvg';

const CartController = () => (
  <Container>

    <div className="price">
      <span className="price__new">$125.00</span>
      <span className="price__percentage-discount">50%</span>
      <span className="price__old">$250.00</span>
    </div>

    <div className="quantity-controll">

      <button type="button" className="minus">
        <img src={minus} alt="minus" />
      </button>

      <span>0</span>

      <button type="button" className="plus">
        <img src={plus} alt="plus" />
      </button>

    </div>

    <button type="button" className="add-to-cart">
      <CartSvg />
      Add to cart
    </button>

  </Container>
);

export default CartController;
