import { Container } from './Home.styled';
import { useFetch } from '../../hooks/useFetch';

export default function Home() {
  const { data, isPending, error } = useFetch('http://localhost:3000/recipes');
  return (
    <Container>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && data.map((recipe) => <h2 key={recipe.id}>{recipe.title}</h2>)}
    </Container>
  );
}
