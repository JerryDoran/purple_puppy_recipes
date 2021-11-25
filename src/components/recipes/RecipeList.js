import { Link } from 'react-router-dom';
import food from '../../assets/food.jpeg';

// styles
import {
  RecipeCard,
  RecipeListContainer,
  RecipeMethod,
} from './RecipeList.styled';

export default function RecipeList({ recipes }) {
  if (recipes.length === 0) {
    return <div className='error'>No recipes matched your search...</div>;
  }
  
  return (
    <RecipeListContainer>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id}>
          <img src={food} alt='food' />
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make</p>
          <RecipeMethod>{recipe.method.substring(0, 100)}...</RecipeMethod>
          <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
        </RecipeCard>
      ))}
    </RecipeListContainer>
  );
}
