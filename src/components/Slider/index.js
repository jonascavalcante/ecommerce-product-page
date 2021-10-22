import { useContext, useState } from 'react';
import { Container } from './styles';

import ButtonControll from '../ButtonControl';
import previous from '../../assets/icons/icon-previous.svg';
import next from '../../assets/icons/icon-next.svg';

import { ProductContext } from '../App';
import SliderList from '../SliderList';

const Slider = () => {
  const { products } = useContext(ProductContext);
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

      <SliderList products={products[0].images} imageNumber={imageNumber} />

      <ButtonControll handleClick={handleChangeImage} icon={previous} className="left" />
      <ButtonControll handleClick={handleChangeImage} icon={next} className="right" />

      <div className="image-buttons">
        {products[0].thumbnails.map((thumbnail, index) => (
          <button
            key={thumbnail}
            onClick={() => handleChangeImageDesktop(index + 1)}
            className={`image-buttons__button${imageNumber === (index + 1) && imageNumber}`}
            type="button"
          >
            <img src={thumbnail} alt={`product-${index + 1}`} />
          </button>
        ))}
      </div>

    </Container>
  );
};

export default Slider;
