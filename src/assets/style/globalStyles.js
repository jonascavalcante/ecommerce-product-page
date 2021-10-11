import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root{
    font-size: 62.5%; /* 10px */
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.typography.font.family}, sans-serif;
  }

  body {
    font-size: ${({ theme }) => theme.typography.bodyCopy.fontSize};
    font-weight: ${({ theme }) => theme.typography.font.regular};
    color: ${({ theme }) => theme.colors.neutral.black};
    background-color: ${({ theme }) => theme.colors.neutral.white};
  }
`;
