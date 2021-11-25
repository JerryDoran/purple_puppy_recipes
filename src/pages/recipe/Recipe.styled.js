import styled from 'styled-components';

export const RecipeContainer = styled.div`
  max-width: 700px;
  margin: 40px auto;
  padding: 40px;
  background: #fff;
  border-radius: 5px;

  .recipeTitle {
    text-align: center;
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
  color: #777;

  &::after {
    content: ',';
  }

  &:last-child::after {
    content: '.';
  }
`;

export const Method = styled.p`
  text-align: left;
  line-height: 1.5em;
  margin-top: 30px;
`;
