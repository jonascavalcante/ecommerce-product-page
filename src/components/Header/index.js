import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { Container } from './styles';

import menuIcon from '../../assets/icons/icon-menu.svg';
import logo from '../../assets/images/logo.svg';
import cart from '../../assets/icons/icon-cart.svg';
import avatar from '../../assets/images/image-avatar.png';

import Cart from '../Cart';

const Header = ({ handleMenuVisibility }) => {
  const [cartVisibility, setCartVisibility] = useState(false);

  function handleCartVisibility() {
    setCartVisibility((prevState) => {
      if (prevState) {
        return false;
      }
      return true;
    });
  }

  return (
    <Container>

      <button className="left" type="button" onClick={handleMenuVisibility}>
        <img src={menuIcon} alt="menu button" />
      </button>

      <img className="left" src={logo} alt="logo" />

      <button className="right" type="button" onClick={handleCartVisibility}>
        <img src={cart} alt="cart button" />
      </button>

      <button type="button">
        <img src={avatar} alt="avatar" />
      </button>

      {cartVisibility && <Cart />}

    </Container>
  );
};

export default Header;

Header.propTypes = {
  handleMenuVisibility: PropTypes.func.isRequired,
};
