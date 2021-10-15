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
    }
  }
`;
