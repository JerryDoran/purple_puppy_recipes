import { Link } from 'react-router-dom';

// styles
import { Container, Nav } from './Navbar.styled';

export default function Navbar() {
  return (
    <Container>
      <Nav>
        <Link to='/' className='brand'>
          <h4>Purple Puppy Recipes</h4>
        </Link>
        <Link to='/create'>Create Recipe</Link>
      </Nav>
    </Container>
  );
}
