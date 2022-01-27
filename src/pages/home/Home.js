import { projectFirestore } from '../../firebase/config';
import { useEffect, useState } from 'react';
import SearchIcon from '../../assets/search.svg';

// components
import RecipeList from '../../components/recipes/RecipeList';

// styles
import { HomeContainer, SearchForm, SearchInput } from './Home.styled';

export default function Home() {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchData, setSearchData] = useState(null);

  useEffect(() => {
    setIsPending(true);

    const unsub = projectFirestore.collection('recipes').onSnapshot(
      (snapshot) => {
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
      },
      (error) => {
        setError(error.message);
        setIsPending(false);
      }
    );

    // cleanup function
    return () => {
      unsub();
    };
  }, []);

  useEffect(() => {
    const filteredData = data?.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchData(filteredData);
  }, [searchTerm, data]);

  console.log(searchData);

  return (
    <HomeContainer>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      <SearchForm>
        <img src={SearchIcon} alt='Search' />
        <SearchInput
          type='text'
          id='search'
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          required
        />
      </SearchForm>
      {searchData ? (
        <RecipeList recipes={searchData} />
      ) : (
        data && <RecipeList recipes={data} />
      )}
      {/* {data && <RecipeList recipes={data} />} */}
    </HomeContainer>
  );
}
