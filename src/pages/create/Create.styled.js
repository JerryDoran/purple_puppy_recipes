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
  span {
    display: block;
    margin: 30px 0 10px;
  }

  .inline {
    display: inline;
    font-size: 14px;
    font-weight: bold;
  }

  .current {
    font-size: 15px;
  }

  .ingredient {
    font-weight: bold;
    font-size: 14px;
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

export const Ingredients = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .btn {
    display: block;
    width: 80px;
    margin-left: 10px;
    font-size: 0.7em;
    color: #fff;
    padding: 3px 5px;
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
`;

