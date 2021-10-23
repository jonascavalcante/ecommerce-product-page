import styled from 'styled-components';

export const Container = styled.div`
  display: none;

  @media (min-width: 996px) {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    gap: 30px;

    button {
      max-width: 92px;
      max-height: 92px;

      border: 2px solid transparent;
      border-radius: 10px;
      cursor: pointer;

      display: grid;
      place-items: center;

      background-color: transparent;
      overflow: hidden;

      img {
        border-radius: 10px;
        width: 105%;
        height: 105%;
      }

      &.image-buttons__button1,
      &.image-buttons__button2,
      &.image-buttons__button3,
      &.image-buttons__button4 {
        border: 2px solid ${({ theme }) => theme.colors.primary.orange};
        background-color: ${({ theme }) => theme.colors.neutral.white};

        img {
          opacity: 0.5;
        }
      }

      &:hover {
        background-color: ${({ theme }) => theme.colors.neutral.white};

        img{
          transition: 0.25s;
          opacity: 0.5;
        }
      }
    }
  }
`;
