import { useContext, useState } from 'react';
import { Container } from './styles';

import SliderList from '../SliderList';
import ButtonControll from '../ButtonControl';
import SliderImageButtons from '../SliderImageButtons';

import previous from '../../assets/icons/icon-previous.svg';
import next from '../../assets/icons/icon-next.svg';

import { ProductContext } from '../App';

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

  const handleChangeImageDesktop = (number) => {
    document.getElementsByClassName('image-buttons__button');
    setImageNumber(number);
  };

  return (
    <Container>

      <SliderList products={products[0].images} imageNumber={imageNumber} />

      <ButtonControll handleClick={handleChangeImage} icon={previous} className="left" />
      <ButtonControll handleClick={handleChangeImage} icon={next} className="right" />

      <SliderImageButtons
        products={products[0].thumbnails}
        imageNumber={imageNumber}
        handleChangeImageDesktop={handleChangeImageDesktop}
      />

    </Container>
  );
};

export default Slider;
