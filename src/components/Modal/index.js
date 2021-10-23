import ReactDom from 'react-dom';
import { Container } from './styles';

import PreviousIcon from '../svgComponents/PreviousIcon';
import NextIcon from '../svgComponents/NextIcon';
import CloseIcon from '../svgComponents/CloseIcon';

import ButtonControll from '../ButtonControl';
import SliderList from '../SliderList';
import SliderImageButtons from '../SliderImageButtons';

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

        <ButtonControll handleClick={handleClick} className="left modal">
          <PreviousIcon />
        </ButtonControll>
        <ButtonControll handleClick={handleClick} className="right modal">
          <NextIcon />
        </ButtonControll>

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
