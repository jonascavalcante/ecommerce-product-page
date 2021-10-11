import styled from 'styled-components';

export const Container = styled.header`
  height: 68px;
  display: flex;
  padding: 20px 24px;

  align-items: center;

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
