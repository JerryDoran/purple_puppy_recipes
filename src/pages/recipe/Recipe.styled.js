import styled from 'styled-components';

export const RecipeContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 10px;
  background: #fff;
  border-radius: 5px;
  background: ${({ mode }) => (mode && mode === 'dark' ? '#555' : '#fff')};
  color: ${({ mode }) => (mode && mode === 'dark' ? '#e4e4e4' : '')};

  .recipeTitle {
    text-align: center;
    margin: 0;
  }

  .time {
    text-align: center;
    font-size: 16px;
  }

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 7px;
  }

  .edit {
    display: inline-block;
    margin-left: 90%;
    cursor: pointer;
    width: 24px;
    height: 24px;
    filter: invert(60%);
  }

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

export const Error = styled.p``;

export const Pending = styled.p``;

export const RecipeList = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  font-size: 18px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ListItem = styled.li`
  margin-right: 10px;
  color: ${({ mode }) => (mode && mode === 'dark' ? '#e4e4e4' : '')};

  &::after {
    content: ',';
  }

  &:last-child::after {
    content: '.';
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Method = styled.p`
  text-align: left;
  line-height: 1.5em;
  margin-top: 30px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
