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
`;
