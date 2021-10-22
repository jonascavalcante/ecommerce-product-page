import { PropTypes } from 'prop-types';
import { Container } from './styles';

const SliderList = ({ products, imageNumber }) => (
  <Container>
    <div className={`list__container list__container--${imageNumber}`}>
      {products.map((product, index) => (
        <img key={product} className={`list__image${index + 1}`} src={product} alt={`product-${index + 1}`} />
      ))}
    </div>
  </Container>
);

export default SliderList;

SliderList.propTypes = {
  products: PropTypes.node.isRequired,
  imageNumber: PropTypes.number.isRequired,
};
