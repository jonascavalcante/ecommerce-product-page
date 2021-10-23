import PropTypes from 'prop-types';
import { Container } from './styles';

const ButtonControl = ({ handleClick, children, className }) => (
  <Container onClick={(e) => handleClick(e.target.className)} type="button" className={className}>
    {children}
  </Container>
);

export default ButtonControl;

ButtonControl.propTypes = {
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};
