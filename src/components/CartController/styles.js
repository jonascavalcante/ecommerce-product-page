import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 24px 24px 24px;
  font-weight: ${({ theme }) => theme.typography.font.bold};

  .price {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .price__new {
      font-size: 3rem;
    }

    .price__percentage-discount {
      margin-left: 20px;
      margin-right: auto;
      padding: 5px 10px;
      font-size: 1.8rem;
      border-radius: 10px;
      color: ${({ theme }) => theme.colors.primary.orange};
      background-color: ${({ theme }) => theme.colors.primary.paleOrange};
    }

    .price__old {
      font-size: 1.8rem;
      text-decoration: line-through;
      color: ${({ theme }) => theme.colors.neutral.grayishBlue};
    }
  }

  .quantity-controll {
    height: 56px;
    margin: 26px 0 16px 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.neutral.lightGrayishBlue};

    button {
      width: 56px;
      height: 100%;
      background: none;
      border: none;
    }
  }

  .add-to-cart {
    width: 100%;
    height: 56px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;

    border: none;
    border-radius: 10px;

    font-size: 1.6rem;
    font-weight: ${({ theme }) => theme.typography.font.bold};
    color: ${({ theme }) => theme.colors.neutral.white};
    background-color: ${({ theme }) => theme.colors.primary.orange};

    svg path{
      fill: #fff;
    }
  }
`;
