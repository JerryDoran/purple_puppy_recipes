import { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { AddButton, AddForm, CreateContainer } from './Edit.styled';
import { projectFirestore } from '../../firebase/config';
import { useTheme } from '../../hooks/useTheme';
import { FaRegTrashAlt } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';

export default function Create() {
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [ingredient, setIngredient] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();
  const ingredientInput = useRef(null);

  const { mode } = useTheme();

  const history = useHistory();

  useEffect(() => {
    setIsPending(true);
    const unsub = projectFirestore
      .collection('recipes')
      .doc(id)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setIsPending(false);
          setTitle(doc.data().title);
          setMethod(doc.data().method);
          setCookingTime(doc.data().cookingTime);
          setIngredients(doc.data().ingredientList);
        } else {
          setIsPending(false);
          setError('Could not find that recipe!');
        }
      });

    return () => {
      unsub();
    };
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedDoc = {
      title,
      ingredientList: ingredients,
      method,
      cookingTime,
    };

    try {
      await projectFirestore.collection('recipes').doc(id).update(updatedDoc);
      history.push(`/recipes/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (e, ing) => {
    e.preventDefault();
    const filteredIngredients = ingredients.filter(
      (ingredient) => ingredient !== ing
    );
    setIngredients(filteredIngredients);
    setIngredient('');
    ingredientInput.current.focus();
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const ing = ingredient.trim();

    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIngredients) => [...prevIngredients, ing]);
    }
    setIngredient('');
    ingredientInput.current.focus();
  };

  return (
    <CreateContainer>
      <h2 className={mode === 'dark' ? 'page-title dark' : 'page-title'}>
        Edit Recipe
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
          <div className='ingredientContainer'>
            <input
              type='text'
              onChange={(e) => setIngredient(e.target.value)}
              value={ingredient}
              ref={ingredientInput}
            />
            <button
              className='delete'
              onClick={(e) => handleDelete(e, ingredient)}
            >
              <FaRegTrashAlt />
            </button>
            <button className='edit' onClick={(e) => handleUpdate(e)}>
              <FaPlus />
            </button>
          </div>
        </label>
        <span className='ingredientSpan'>
          {ingredients &&
            ingredients.map((ingredient) => {
              return (
                <p
                  className='ingredientChip'
                  style={{
                    color: mode === 'dark' ? '#ccc' : '#333',
                    background: mode === 'dark' ? '#777' : 'transparent',
                  }}
                  key={ingredient}
                  onClick={() => setIngredient(ingredient)}
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
            type='text'
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>
        <AddButton>Update</AddButton>
      </AddForm>
    </CreateContainer>
  );
}
