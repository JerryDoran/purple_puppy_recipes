import { useLocation } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import RecipeList from '../../components/recipes/RecipeList';

// styles
import { SearchContainer } from './Search.styled';
import { useTheme } from '../../hooks/useTheme';

export default function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);

  const query = queryParams.get('q');

  const url = 'http://localhost:3000/recipes?q=' + query;

  const { error, isPending, data } = useFetch(url);

  const { mode } = useTheme();

  return (
    <SearchContainer>
      <h2 className={`page-title ${mode}`}>Recipes including "{query}"</h2>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </SearchContainer>
  );
}
