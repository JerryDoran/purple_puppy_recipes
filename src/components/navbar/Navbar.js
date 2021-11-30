import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import SearchBar from '../searchBar/SearchBar';

// styles
import { NavbarContainer, Nav } from './Navbar.styled';

export default function Navbar() {
  const { color, changeColor } = useTheme();
  return (
    <NavbarContainer color={color}>
      <Nav>
        <Link to='/' className='brand'>
          <h4>Purple Puppy Recipes</h4>
        </Link>
        {/* <SearchBar /> */}
        <Link to='/create'>Create Recipe</Link>
      </Nav>
    </NavbarContainer>
  );
}
