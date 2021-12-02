import { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AddButton, AddForm, CreateContainer } from './Create.styled';
import { projectFirestore } from '../../firebase/config';
import { useTheme } from '../../hooks/useTheme';

export default function Create() {
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [newIngredient, setNewIngredient] = useState('');
  const [ingredients, setIngredients] = useState('');
  const ingredientInput = useRef(null);

  const history = useHistory();

  const { mode } = useTheme();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const doc = {
      title,
      ingredients,
      method,
      cookingTime: cookingTime + ' minutes',
    };

    try {
      await projectFirestore.collection('recipes').add(doc);
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CreateContainer>
      <h2 className={mode === 'dark' ? 'page-title dark' : 'page-title'}>
        Add Recipe
      </h2>
      <AddForm onSubmit={handleSubmit}>
        <label>
          <span>Recipe Title</span>
          <input
            type='text'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>Recipe Ingredients</span>
          <input
            type='text'
            onChange={(e) => setIngredients(e.target.value)}
            value={ingredients}
            required
          />
        </label>

        <label>
          <span>Recipe method</span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>
        <label>
          <span>Cooking time (minutes)</span>
          <input
            type='number'
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>
        <AddButton>Add</AddButton>
      </AddForm>
    </CreateContainer>
  );
}
