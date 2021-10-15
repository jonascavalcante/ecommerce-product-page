import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  position: fixed;
  top: 0;
  z-index: 2;

  &.visible {
    display: block;
  }

  &.hidden {
    display: none;
  }

  .background {
    width: 100%;
    height: 100%;

    opacity: 75%;
    background-color: ${({ theme }) => theme.colors.neutral.black};
  }

  .menu {
    width: 250px;
    height: 100%;

    position: absolute;
    top: 0;

    background-color: ${({ theme }) => theme.colors.neutral.white};

    .menu__header {
      width: 250px;
      height: 68px;
      display: flex;
      align-items: center;

      button {
        width: 23px;
        height: 23px;
        margin-left: 24px;

        border: none;
        background-color: transparent;
      }
    }

    .menu__links {
      padding: 11px 24px;

        li {
          height: 46px;
          list-style-type: none;

          a {
            height: 100%;

            display: flex;
            align-items: center;

            text-decoration: none;
            font-weight: ${({ theme }) => theme.typography.font.bold};
            color: ${({ theme }) => theme.colors.neutral.black};
        }
      }
    }
  }
`;
