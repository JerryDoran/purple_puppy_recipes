import { useFetch } from '../../hooks/useFetch';

// components
import RecipeList from '../../components/recipes/RecipeList';

// styles
import { HomeContainer } from './Home.styled';

export default function Home() {
  const { data, isPending, error } = useFetch('http://localhost:3000/recipes');
  return (
    <HomeContainer>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </HomeContainer>
  );
}
