import { useState } from 'react';
import { Container } from './styles';

import product1 from '../../assets/images/image-product-1.jpg';
import product2 from '../../assets/images/image-product-2.jpg';
import product3 from '../../assets/images/image-product-3.jpg';
import product4 from '../../assets/images/image-product-4.jpg';

import thumbnail1 from '../../assets/images/image-product-1-thumbnail.jpg';
import thumbnail2 from '../../assets/images/image-product-2-thumbnail.jpg';
import thumbnail3 from '../../assets/images/image-product-3-thumbnail.jpg';
import thumbnail4 from '../../assets/images/image-product-4-thumbnail.jpg';

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

  function handleChangeImageDesktop(number) {
    document.getElementsByClassName('image-buttons__button');
    setImageNumber(number);
  }

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

      <div className="image-buttons">

        <button
          onClick={() => handleChangeImageDesktop(1)}
          className={`image-buttons__button${imageNumber === 1 && imageNumber}`}
          type="button"
        >
          <img src={thumbnail1} alt="product-1" />
        </button>

        <button
          onClick={() => handleChangeImageDesktop(2)}
          className={`image-buttons__button${imageNumber === 2 && imageNumber}`}
          type="button"
        >
          <img src={thumbnail2} alt="product-2" />
        </button>

        <button
          onClick={() => handleChangeImageDesktop(3)}
          className={`image-buttons__button${imageNumber === 3 && imageNumber}`}
          type="button"
        >
          <img src={thumbnail3} alt="product-3" />
        </button>

        <button
          onClick={() => handleChangeImageDesktop(4)}
          className={`image-buttons__button${imageNumber === 4 && imageNumber}`}
          type="button"
        >
          <img src={thumbnail4} alt="product-4" />
        </button>

      </div>

    </Container>
  );
};

export default Slider;
