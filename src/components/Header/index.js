import { Container } from './styles';

import menuIcon from '../../assets/icons/icon-menu.svg';
import logo from '../../assets/images/logo.svg';
import cart from '../../assets/icons/icon-cart.svg';
import avatar from '../../assets/images/image-avatar.png';

import Cart from '../Cart';

const Header = () => (
  <Container>

    <button className="left" type="button">
      <img src={menuIcon} alt="menu button" />
    </button>

    <img className="left" src={logo} alt="logo" />

    <button className="right" type="button">
      <img src={cart} alt="cart button" />
    </button>

    <button type="button">
      <img src={avatar} alt="avatar" />
    </button>

    <Cart />

  </Container>
);

export default Header;
