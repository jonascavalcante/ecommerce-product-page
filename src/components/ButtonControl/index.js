import PropTypes from 'prop-types';
import { Container } from './styles';

const ButtonControl = ({ icon, className }) => (
  <Container type="button" className={className}>
    <img src={icon} alt="button" />
  </Container>
);

export default ButtonControl;

ButtonControl.propTypes = {
  icon: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};
