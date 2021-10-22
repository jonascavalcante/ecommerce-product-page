import { PropTypes } from 'prop-types';
import { Container } from './styles';

const SliderImageButtons = ({ products, imageNumber, handleChangeImageDesktop }) => (
  <Container>
    {products.map((thumbnail, index) => (
      <button
        key={thumbnail}
        onClick={() => handleChangeImageDesktop(index + 1)}
        className={`image-buttons__button${imageNumber === (index + 1) && imageNumber}`}
        type="button"
      >
        <img src={thumbnail} alt={`product-${index + 1}`} />
      </button>
    ))}

  </Container>
);

export default SliderImageButtons;

SliderImageButtons.propTypes = {
  products: PropTypes.node.isRequired,
  imageNumber: PropTypes.number.isRequired,
  handleChangeImageDesktop: PropTypes.func.isRequired,
};
