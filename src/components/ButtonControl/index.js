import PropTypes from 'prop-types';
import { Container } from './styles';

const ButtonControl = ({ handleClick, icon, className }) => (
  <Container onClick={(e) => handleClick(e.target.className)} type="button" className={className}>
    <img src={icon} alt="button" />
  </Container>
);

export default ButtonControl;

ButtonControl.propTypes = {
  handleClick: PropTypes.func.isRequired,
  icon: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};
