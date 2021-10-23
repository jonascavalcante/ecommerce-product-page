import styled from 'styled-components';

export const Container = styled.div`
  display: none;

  @media (min-width: 996px) {
    width: 100%;
    height: 100%;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    display: grid;
    place-items: center;


    .background {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: ${({ theme }) => theme.colors.neutral.black};
      opacity: 75%;
      z-index: -1;
    }

    .container {
      .close {
          width: 56px;
          height: 56px;
          margin: 0 0 6px auto;
          border: none;
          display: block;
          cursor: pointer;
          background-color: transparent;

          svg path {
            fill: ${({ theme }) => theme.colors.neutral.white};
          }


          &:hover svg path{
            transition: 0.25s;
            fill: ${({ theme }) => theme.colors.primary.orange};
          }
        }

      .container__slider-list {
        width: 606px;
        padding: 0 28px;
        display: flex;
        flex-direction: column;
        position: relative;
      }
    }
  }
`;
