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
    box-shadow: 0 20px 20px ${({ theme }) => theme.colors.primary.paleOrange};

    svg path{
      fill: #fff;
    }
  }

  @media (min-width: 996px) {
    padding: 32px 0 0 0;
    display: flex;
    flex-wrap: wrap;

    .price {
      width: 100%;
      flex-wrap: wrap;

      .price__new {
        line-height: 100%;
      }

      .price__percentage-discount {
        padding: 2px 7px;
        margin-left: 15px;
      }

      .price__old {
        line-height: 100%;
        margin-top: 15px;
        width: 100%;
      }
    }

    .quantity-controll {
      width: 100%;
      max-width: 158px;
      margin: 40px 15px 0 0;

      button {
        width: 46px;
        cursor: pointer;
      }
    }

    .add-to-cart {
      width: 100%;
      max-width: 272px;
      margin-top: 40px;
      cursor: pointer;
      transition: 0.2s;

      &:hover {
        opacity: 0.5;
      }
    }
  }
`;
