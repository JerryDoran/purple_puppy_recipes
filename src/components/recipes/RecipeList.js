import { Link } from 'react-router-dom';
import foodImage from '../../assets/food.jpeg';
import trashcanIcon from '../../assets/trashcan.svg';
import { projectFirestore } from '../../firebase/config';

// styles
import {
  RecipeCard,
  RecipeListContainer,
  RecipeMethod,
} from './RecipeList.styled';

import { useTheme } from '../../hooks/useTheme';

export default function RecipeList({ recipes }) {
  const { mode } = useTheme();

  if (recipes.length === 0) {
    return <div className='error'>No recipes matched your search...</div>;
  }

  const handleClick = (id) => {
    projectFirestore.collection('recipes').doc(id).delete();
  };

  const handleEdit = (id) => {};

  return (
    <RecipeListContainer>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} mode={mode}>
          <img src={foodImage} alt='food' />
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make</p>
          <RecipeMethod mode={mode}>
            {recipe.method.substring(0, 100)}...
          </RecipeMethod>
          <Link to={`/recipes/${recipe.id}`}>Cook This</Link>

          <img
            className='delete'
            src={trashcanIcon}
            alt='delete icon'
            onClick={() => handleClick(recipe.id)}
          />
        </RecipeCard>
      ))}
    </RecipeListContainer>
  );
}
