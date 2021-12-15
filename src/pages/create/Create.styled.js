import styled from 'styled-components';

export const CreateContainer = styled.div`
  color: #555;
  max-width: 480px;
  margin: 60px auto;

  p {
    margin-top: 10px;
    font-size: 0.8em;
  }
`;

export const AddForm = styled.form`
  padding-bottom: 30px;
  padding-left: 30px;
  padding-right: 30px;
  span {
    display: block;
    margin: 30px 0 10px;
  }

  .ingredient {
    font-weight: bold;
    font-size: 14px;
  }

  .recipeIngredients {
    display: flex;
  }

  .add {
    margin-left: 10px;
    width: 100px;
    font-size: 1em;
    color: #fff;
    padding: 5px 10px;
    border: 0;
    border-radius: 5px;
    background-color: #8f5bd3;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #58249c;
    }
  }

  .ingredientSpan {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0;
  }

  .ingredientChip {
    display: inline;
    font-size: 14px;
    margin-left: 10px;
    color: #aaa;
    background: #777;
    padding: 2px 7px;
    border-radius: 40px;
    cursor: pointer;
  }
`;

export const AddButton = styled.button`
  display: block;
  width: 100px;
  margin-top: 30px;
  font-size: 1em;
  color: #fff;
  padding: 5px 10px;
  border: 0;
  border-radius: 5px;
  background-color: #8f5bd3;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #58249c;
  }
`;
