import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 68px;
  padding: 20px 24px;

  display: flex;
  align-items: center;

  position: fixed;
  top: 0;
  z-index: 1;

  background-color: ${({ theme }) => theme.colors.neutral.white};

  button {
    width: 23px;
    height: 23px;

    background: none;
    border: none;

    img {
      width: 100%;
    }

    &.left {
      margin-right: 16px;
    }

    &.right {
      margin: 0 20px 0 auto;
      position: relative;

      span {
        font-size: 1.2rem;
        font-weight: ${({ theme }) => theme.typography.font.bold};
        padding: 0px 7px;
        border-radius: 8px;
        position: absolute;
        top: -8px;
        left: 8px;
        color: ${({ theme }) => theme.colors.neutral.white};
        background-color: ${({ theme }) => theme.colors.primary.orange};
      }
    }
  }
`;
