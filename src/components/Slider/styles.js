import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 300px;
  background: ${({ theme }) => theme.colors.primary.orange};
  overflow: auto;
  scroll-snap-type: x mandatory;

  .list {
    width: 100%;
    display: flex;

    img {
      width: 100%;
      scroll-snap-align: center;
    }
  }
`;
