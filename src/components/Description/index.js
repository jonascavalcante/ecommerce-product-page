import { useContext } from 'react';
import { Container } from './styles';

import { ProductContext } from '../App';

const Description = () => {
  const { products } = useContext(ProductContext);

  return (

    <Container>
      <h5>{products[0].company}</h5>
      <h2>{products[0].title}</h2>
      <p>{products[0].description}</p>
    </Container>
  );
};

export default Description;
