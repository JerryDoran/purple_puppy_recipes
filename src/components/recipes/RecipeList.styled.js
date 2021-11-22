import styled from 'styled-components';

export const RecipeListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  max-width: 1200px;
  margin: 40px auto;
`;

export const RecipeCard = styled.div`
  background: #fff;
  color: #333;
  padding: 20px;
  border-radius: 7px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: rotate(3deg);
  }

  h3 {
    color: #555;
    margin-bottom: 7px;
    font-size: 22px;
  }

  p {
    font-size: 0.7em;
    color: #999;
    margin-bottom: 8px;
  }

  a {
    color: #fff;
    font-size: 0.6em;
    display: block;
    background: #8f5bd3;
    width: 90px;
    text-align: center;
    padding: 5px;
    border-radius: 7px;
    font-family: 'Baloo Da 2', sans-serif;
    transition: all 0.2s ease-in-out;

    &:hover {
      background: #58249c;
    }
  }
`;

export const RecipeMethod = styled.div`
  color: #555;
  font-weight: 300;
  font-size: 0.7em;
  margin: 20px 0;
`;

// export const Container = styled.div``;
