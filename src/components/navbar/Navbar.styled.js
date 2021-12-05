import styled from 'styled-components';

export const NavbarContainer = styled.div`
  /* background: #58249c; */
  background: ${(props) => props.color};
  padding: 20px;
  color: #fff;
  border-bottom: 10px solid #8f5bd3;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  a.brand {
    margin-right: auto;
    color: inherit;
  }

  h4 {
    font-family: 'Baloo Da 2', cursive;

    @media (max-width: 500px) {
      font-size: 13px;
    }
  }

  a:last-child {
    color: inherit;
    margin-left: 40px;
    padding: 8px;
    border: 1px solid #fff;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 600;

    &:hover {
      background: #fff;
      color: #333;
    }

    @media (max-width: 500px) {
      color: inherit;
      margin-left: 40px;
      padding: 4px;
      border: 1px solid #fff;
      border-radius: 4px;
      font-size: 13px;
      font-weight: 600;
    }
  }
`;
