import { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import {
  AddButton,
  AddForm,
  CreateContainer,
  Ingredients,
} from './Create.styled';

export default function Create() {
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [newIngredient, setNewIngredient] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef(null);

  const url = 'http://localhost:3000/recipes';

  const { postData, data, error } = useFetch(url, 'POST');

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await postData({
      title,
      ingredients,
      method,
      cookingTime: cookingTime + ' minutes',
    });

    history.push('/');
  };

  const handleAdd = (e) => {
    e.preventDefault();

    const ing = newIngredient.trim();
    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIngredients) => [...prevIngredients, ing]);
    }

    setNewIngredient('');
    ingredientInput.current.focus();
  };

  return (
    <CreateContainer>
      <h2 className='page-title'>Add Recipe</h2>
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
          <span>
            Recipe Ingredients<p className='inline'> (add one at a time)</p>
          </span>

          <Ingredients>
            <input
              type='text'
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button className='btn' onClick={handleAdd}>
              Add
            </button>
          </Ingredients>
        </label>
        <p className='current'>
          Current Ingredients:{' '}
          {ingredients.map((ingredient) => (
            <em className='ingredient' key={ingredient}>
              {ingredient},{' '}
            </em>
          ))}
        </p>

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
