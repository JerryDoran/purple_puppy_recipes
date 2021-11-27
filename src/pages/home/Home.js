import { projectFirestore } from '../../firebase/config';
import { useEffect, useState } from 'react';

// components
import RecipeList from '../../components/recipes/RecipeList';

// styles
import { HomeContainer } from './Home.styled';

export default function Home() {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);

    projectFirestore
      .collection('recipes')
      .get()
      .then((snapshot) => {
        if (snapshot.empty) {
          setError('No recipes found!');
          setIsPending(false);
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
          });
          setData(results);
          setIsPending(false);
        }
      })
      .catch((err) => {
        console.log(err.message);
        setIsPending(false);
      });
  }, []);
  return (
    <HomeContainer>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </HomeContainer>
  );
}
