import styled from 'styled-components';

export const SearchContainer = styled.div`
  margin: -30px;

  h2{
    color: ${({ mode }) => (mode === 'dark' ? '#fff' : '#333')
  }
`;
