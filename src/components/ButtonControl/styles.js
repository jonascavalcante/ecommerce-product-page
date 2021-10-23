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

  svg {
    pointer-events: none;
  }

  @media (min-width: 996px) {
    display: none;

    &.modal {
      width: 56px;
      height: 56px;

      display: grid;

      border-radius: 28px;

      top: calc(50% - 28px);

      cursor: pointer;

      &.left {
        left: 0;
      }

      &.right {
        right: 0;
      }

      &:hover svg path {
        transition: 0.25s;
        stroke: ${({ theme }) => theme.colors.primary.orange};
      }
    }
  }
`;
