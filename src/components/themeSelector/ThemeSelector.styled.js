import styled from 'styled-components';

export const ThemeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 20px auto;
  padding-right: 30px;
`;

export const ThemeButtons = styled.div`
  display: flex;
  div {
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin-left: 15px;
    border-radius: 50%;
  }
`;

export const ModeButtons = styled.div`
  margin-left: 30px;

  img {
    width: 24px;
    height: 24px;
    cursor: pointer;
    /* filter: ${({ mode }) => (mode === 'dark' ? 'invert(100%)' : 'invert(20%)')}; */
  }
`;
