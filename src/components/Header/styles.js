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

  .menu {
    display: none;
  }

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

  @media (min-width: 996px) {
    height: 113px;
    padding: 0 10.8%;

    &::after {
      content: '';
      width: calc(100% - 21.6%);
      height: 0.5px;
      background-color: ${({ theme }) => theme.colors.neutral.grayishBlue};
      position: absolute;
      top: 113px;
    }

    img.left {
      margin-right: 56px;
    }

    .menu {
      height: 100%;
      display: flex;
      gap: 32px;

      li {
        list-style-type: none;

        a{
          height: 100%;

          display: flex;
          align-items: center;
          border-bottom: 4px solid transparent;

          color: ${({ theme }) => theme.colors.neutral.darkGrayishBlue};
          text-decoration: none;

          &:hover {
            transition: 0.25s;
            color: ${({ theme }) => theme.colors.neutral.veryDarkBlue};
            border-bottom: 4px solid ${({ theme }) => theme.colors.primary.orange};
          }
        }
      }
    }

    button {
      width: 50px;
      height: 50px;
      cursor: pointer;

      &.left {
        display: none;
      }

      &.right {
        margin: 0 32px 0 auto;

        span {
          top: 5px;
          left: 22px;
        }

        &:hover svg path {
          transition: 0.25s;
          fill: ${({ theme }) => theme.colors.neutral.veryDarkBlue};
        }
      }

      &.avatar {
        border-radius: 100%;
        border: 2px solid transparent;

        &:hover {
          transition: 0.25s;
          border: 2px solid ${({ theme }) => theme.colors.primary.orange};
        }
      }
    }
  }
`;
