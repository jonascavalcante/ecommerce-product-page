import { PropTypes } from 'prop-types';
import { Container } from './styles';

const ProductPage = ({ children }) => (
  <Container>
    {children}
  </Container>
);

export default ProductPage;

ProductPage.propTypes = {
  children: PropTypes.node.isRequired,
};
