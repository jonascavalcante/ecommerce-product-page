import CartController from '../CartController';
import Description from '../Description';
import { Container } from './styles';

const Main = () => (
  <Container>
    <Description />
    <CartController />
  </Container>
);

export default Main;
