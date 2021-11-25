import { useParams } from 'react-router';
import { useFetch } from '../../hooks/useFetch';
import {
  Error,
  ListItem,
  Method,
  Pending,
  RecipeContainer,
  RecipeList,
} from './Recipe.styled';
import food from '../../assets/food.jpeg';

export default function Recipe() {
  const { id } = useParams();

  const url = `http://localhost:3000/recipes/${id}`;

  const { data: recipe, isPending, error } = useFetch(url);

  console.log(recipe);

  return (
    <RecipeContainer>
      {error && <Error>{error}</Error>}
      {isPending && <Pending>Loading...</Pending>}
      {recipe && (
        <>
          <img src={food} alt='food' />
          <h2 className='recipeTitle'>{recipe.title}</h2>
          <p className='time'>(Takes {recipe.cookingTime} to make)</p>
          <RecipeList>
            {recipe.ingredients.map((ingredient) => {
              return <ListItem key={ingredient}>{ingredient}</ListItem>;
            })}
          </RecipeList>
          <Method>{recipe.method}</Method>
        </>
      )}
    </RecipeContainer>
  );
}
