import { useParams } from 'react-router';
import { useFetch } from '../../hooks/useFetch';
import { projectFirestore } from '../../firebase/config';
import {
  Error,
  ListItem,
  Method,
  Pending,
  RecipeContainer,
  RecipeList,
} from './Recipe.styled';
import food from '../../assets/food.jpeg';
import { useTheme } from '../../hooks/useTheme';
import { useEffect, useState } from 'react';
import editIcon from '../../assets/editIcon.svg';

export default function Recipe() {
  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  const { id } = useParams();
  const { mode } = useTheme();

  useEffect(() => {
    setIsPending(true);
    const unsub = projectFirestore
      .collection('recipes')
      .doc(id)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setIsPending(false);
          setRecipe(doc.data());
        } else {
          setIsPending(false);
          setError('Could not find that recipe!');
        }
      });

    return () => {
      unsub();
    };
  }, []);

  const handleClick = () => {
    projectFirestore.collection('recipes').doc(id).update({
      title: 'Meatloaf',
    });
  };

  return (
    <RecipeContainer mode={mode}>
      {error && <Error>{error}</Error>}
      {isPending && <Pending>Loading...</Pending>}
      {recipe && (
        <>
          <img src={food} alt='food' />
          <h2 className='recipeTitle'>{recipe.title}</h2>
          <p className='time'>(Takes {recipe.cookingTime} to make)</p>
          <RecipeList>
            {recipe.ingredients.map((ingredient) => {
              return (
                <ListItem mode={mode} key={ingredient}>
                  {ingredient}
                </ListItem>
              );
            })}
          </RecipeList>
          <Method>{recipe.method}</Method>
          <img
            className='edit'
            src={editIcon}
            alt='edit icon'
            onClick={handleClick}
          />
        </>
      )}
    </RecipeContainer>
  );
}
