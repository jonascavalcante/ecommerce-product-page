import { PropTypes } from 'prop-types';
import { Container } from './styles';

const SliderList = ({
  fakeButton, handleModalVisibility, products, imageNumber,
}) => (
  <Container>
    <div className={fakeButton} onClick={handleModalVisibility} role="button" tabIndex={0}> </div>
    <div className={`list__container list__container--${imageNumber}`}>
      {products.map((product, index) => (
        <img key={product} className={`list__image${index + 1}`} src={product} alt={`product-${index + 1}`} />
      ))}
    </div>
  </Container>
);

export default SliderList;

SliderList.propTypes = {
  fakeButton: PropTypes.string,
  handleModalVisibility: PropTypes.func,
  products: PropTypes.node.isRequired,
  imageNumber: PropTypes.number.isRequired,
};

SliderList.defaultProps = {
  fakeButton: '',
  handleModalVisibility: () => false,
};
