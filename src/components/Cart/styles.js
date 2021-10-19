import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% - 16px);
  max-width: 360px;
  min-height: 256px;
  background-color: ${({ theme }) => theme.colors.neutral.white};

  border-radius: 10px;
  position: absolute;
  top: 76px;
  right: 8px;
  z-index: 1;

  display: flex;
  flex-direction: column;

  h3 {
    height: 67px;
    padding: 0 24px;
    font-size: 1.7rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.grayishBlue};
  }

  .info {
    height: 50px;
    margin: 25px 24px 32px 24px;
    display: flex;

    img {
      height: 100%;
      border-radius: 5px;
    }

    .info__product {
      padding: 0 8px 0 15px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;

      p {
        width: 100%;

        span {
          font-weight: ${({ theme }) => theme.typography.font.bold};
        }
      }
    }

    button {
      height: 100%;

      img {
        width: 14px;
        height: auto;
      }
    }
  }

  .checkout-button {
    width: 312px;
    height: 56px;
    border-radius: 10px;
    align-self: center;

    font-size: 1.6rem;
    font-weight: ${({ theme }) => theme.typography.font.bold};
    color: ${({ theme }) => theme.colors.neutral.white};
    background-color: ${({ theme }) => theme.colors.primary.orange};
  }

  .cart-empty {
    width: 100%;
    min-height: 189px;
    display: grid;
    place-items: center;
    font-size: 1.7rem;
    font-weight: ${({ theme }) => theme.typography.font.bold};
    color: ${({ theme }) => theme.colors.neutral.darkGrayishBlue}
 }
`;
