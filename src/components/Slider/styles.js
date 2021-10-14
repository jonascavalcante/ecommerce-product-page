import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary.orange};

  position: relative;

  .list {
    width: 100%;
    height: 300px;
    display: flex;

    overflow: auto;
    scroll-snap-type: x mandatory;

    img {
      width: 100%;
      object-fit: cover;
      scroll-snap-align: center;
    }
  }
`;
