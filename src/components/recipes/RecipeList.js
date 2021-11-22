import { Link } from 'react-router-dom';

// styles
import {
  RecipeCard,
  RecipeListContainer,
  RecipeMethod,
} from './RecipeList.styled';

export default function RecipeList({ recipes }) {
  return (
    <RecipeListContainer>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make</p>
          <RecipeMethod>{recipe.method.substring(0, 100)}...</RecipeMethod>
          <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
        </RecipeCard>
      ))}
    </RecipeListContainer>
  );
}
