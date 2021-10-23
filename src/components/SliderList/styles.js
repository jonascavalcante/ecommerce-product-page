import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 300px;
  display: flex;

  background: ${({ theme }) => theme.colors.primary.orange};
  overflow: hidden;

  .fake-button {
    display: none;
  }

  .list__container {
    width: 100%;
    height: 100%;
    display: flex;
    transition: 0.25s;

    img {
      width: 100%;
      object-fit: cover;
    }

    &.list__container--1 {
      margin-left: 0%;
    }

    &.list__container--2 {
      margin-left: -100%;
    }

    &.list__container--3 {
      margin-left: -200%;
    }

    &.list__container--4 {
      margin-left: -300%;
    }
  }

  @media (min-width: 996px) {
    height: auto;
    border-radius: 10px;

    position: relative;

    .fake-button {
      width: 100%;
      height: 100%;
      display: block;
      position: absolute;
      cursor: pointer;
    }
  }
`;
