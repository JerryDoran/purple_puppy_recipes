import { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { AddButton, AddForm, CreateContainer } from './Edit.styled';
import { projectFirestore } from '../../firebase/config';
import { useTheme } from '../../hooks/useTheme';

export default function Create() {
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();

  console.log('recipe id:' + id);

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
          setIngredients(doc.data().ingredients);
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
      ingredients,
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
