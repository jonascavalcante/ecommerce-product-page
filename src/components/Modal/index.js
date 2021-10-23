import ReactDom from 'react-dom';
import { Container } from './styles';

import previous from '../../assets/icons/icon-previous.svg';
import next from '../../assets/icons/icon-next.svg';

import ButtonControll from '../ButtonControl';
import SliderList from '../SliderList';
import SliderImageButtons from '../SliderImageButtons';
import CloseIcon from './CloseIcon';

const Modal = ({
  handleModalVisibility, imageNumber, products, handleClick, handleChangeImageDesktop,
}) => ReactDom.createPortal(
  <Container>

    <div className="background" />

    <div className="container">

      <button onClick={handleModalVisibility} type="button" className="close">
        <CloseIcon />
      </button>

      <div className="container__slider-list">

        <SliderList products={products} imageNumber={imageNumber} />

        <ButtonControll handleClick={handleClick} icon={previous} className="left modal" />
        <ButtonControll handleClick={handleClick} icon={next} className="right modal" />

      </div>

      <SliderImageButtons
        products={products}
        imageNumber={imageNumber}
        handleChangeImageDesktop={handleChangeImageDesktop}
      />

    </div>

  </Container>,
  document.getElementById('modal-root'),
);

export default Modal;
