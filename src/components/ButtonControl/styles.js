import styled from 'styled-components';

export const Container = styled.button`
  width: 40px;
  height: 40px;

  display: grid;
  place-items: center;

  border-radius: 20px;
  border: none;

  position: absolute;
  top: calc(50% - 20px);

  background-color: ${({ theme }) => theme.colors.neutral.white};

  &.left {
    left: 16px;
  }

  &.right {
    right: 16px;
  }

  img {
    height: 14px;
    pointer-events:none;
  }

  @media (min-width: 996px) {
    display: none;
  }
`;
