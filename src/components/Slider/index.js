import { useState } from 'react';
import { Container } from './styles';

import product1 from '../../assets/images/image-product-1.jpg';
import product2 from '../../assets/images/image-product-2.jpg';
import product3 from '../../assets/images/image-product-3.jpg';
import product4 from '../../assets/images/image-product-4.jpg';

import ButtonControll from '../ButtonControl';
import previous from '../../assets/icons/icon-previous.svg';
import next from '../../assets/icons/icon-next.svg';

const Slider = () => {
  const [imageNumber, setImageNumber] = useState(1);

  const handleChangeImage = (className) => {
    if (className.includes('left')) {
      setImageNumber((prevState) => (prevState > 1 ? prevState - 1 : 4));
    }

    if (className.includes('right')) {
      setImageNumber((prevState) => (prevState < 4 ? prevState + 1 : 1));
    }
  };

  return (
    <Container>

      <div className="list">
        <div className={`list__container list__container--${imageNumber}`}>
          <img className="list__image1" src={product1} alt="product-1" />
          <img className="list__image2" src={product2} alt="product-2" />
          <img className="list__image3" src={product3} alt="product-3" />
          <img className="list__image4" src={product4} alt="product-4" />
        </div>
      </div>

      <ButtonControll handleClick={handleChangeImage} icon={previous} className="left" />
      <ButtonControll handleClick={handleChangeImage} icon={next} className="right" />

    </Container>
  );
};

export default Slider;
