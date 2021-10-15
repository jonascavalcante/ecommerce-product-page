import { PropTypes } from 'prop-types';
import { Container } from './styles';

import close from '../../assets/icons/icon-close.svg';

const MenuMobile = ({ menuVisibility, handleMenuVisibility }) => (

  <Container className={menuVisibility ? 'visible' : 'hidden'}>

    <div onClick={handleMenuVisibility} className="background" role="button" tabIndex={0}>.</div>

    <div className="menu">

      <div className="menu__header">
        <button type="button" onClick={handleMenuVisibility}>
          <img src={close} alt="close" />
        </button>
      </div>

      <ul className="menu__links">
        <li><a onClick={handleMenuVisibility} href="#collections">Collections</a></li>
        <li><a onClick={handleMenuVisibility} href="#men">Men</a></li>
        <li><a onClick={handleMenuVisibility} href="#women">Women</a></li>
        <li><a onClick={handleMenuVisibility} href="#about">About</a></li>
        <li><a onClick={handleMenuVisibility} href="#contact">Contact</a></li>
      </ul>

    </div>

  </Container>
);

export default MenuMobile;

MenuMobile.propTypes = {
  menuVisibility: PropTypes.bool.isRequired,
  handleMenuVisibility: PropTypes.func.isRequired,
};
