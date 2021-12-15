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
  // const [ingredients, setIngredients] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef(null);

  const history = useHistory();

  const { mode } = useTheme();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(title, method, cookingTime, ingredients);

    const doc = {
      title,
      ingredientList: ingredients,
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

  const handleAdd = (e) => {
    e.preventDefault();

    const ing = newIngredient.trim();

    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIngredients) => [...prevIngredients, ing]);
    }
    setNewIngredient('');
    ingredientInput.current.focus();
  };

  const handleDelete = (ing) => {
    const filteredIngredients = ingredients.filter(
      (ingredient) => ingredient !== ing
    );
    setIngredients(filteredIngredients);
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
          {/* <span>Recipe Ingredients</span>
          <input
            type='text'
            onChange={(e) => setIngredients(e.target.value)}
            value={ingredients}
            required
          /> */}
          <span>Recipe Ingredients</span>
          <div className='recipeIngredients'>
            <input
              type='text'
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              // required
              ref={ingredientInput}
            />
            <button className='add' onClick={handleAdd}>
              Add
            </button>
          </div>
        </label>
        <span className='ingredientSpan'>
          {ingredients.map((ingredient) => {
            return (
              <p
                onClick={() => handleDelete(ingredient)}
                className='ingredientChip'
                key={ingredient}
              >
                {ingredient}
              </p>
            );
          })}
        </span>

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
