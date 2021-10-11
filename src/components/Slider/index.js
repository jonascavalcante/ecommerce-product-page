import { Container } from './styles';

import product1 from '../../assets/images/image-product-1.jpg';
import product2 from '../../assets/images/image-product-2.jpg';
import product3 from '../../assets/images/image-product-3.jpg';
import product4 from '../../assets/images/image-product-4.jpg';

const Slider = () => (
  <Container>

    <div className="list">
      <img src={product1} alt="product-1" />
      <img src={product2} alt="product-2" />
      <img src={product3} alt="product-3" />
      <img src={product4} alt="product-4" />
    </div>

  </Container>
);

export default Slider;
