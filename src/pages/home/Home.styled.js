import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 60px auto;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;

  input {
    margin-left: 10px;
  }
  .search {
    font-size: 18px;
  }
`;

export const SearchInput = styled.input`
  height: 30px;
  width: 250px;
  font-size: 16px;
`;

export const SearchButton = styled.button`
  height: 30px;
  font-size: 16px;
  margin-left: 10px;
  border-radius: 4px;
  padding: 3px 6px;
  border: 1px solid #fff;
  color: #fff;
  cursor: pointer;
  background-color: transparent;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: lightgray;
    color: #333;
  }
`;
