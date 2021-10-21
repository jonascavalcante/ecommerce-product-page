import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px;

  h5 {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.primary.orange};
  }

  h2 {
    font-size: 2.8rem;
    margin: 20px 0 24px 0;
  }

  p {
    font-size: 1.5rem;
    line-height: 160%;
    color: ${({ theme }) => theme.colors.neutral.darkGrayishBlue};
  }

  @media (min-width: 996px) {
    padding: 55px 0 0 0;

    h5 {
      font-size: 1.6rem;
    }

    h2 {
      line-height: 110%;
      font-size: 4.5rem;
      margin: 20px 0 36px 0;
    }

    p {
      font-size: 1.6rem;
    }
  }
`;
