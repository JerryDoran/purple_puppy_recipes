import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';

// styles
import { NavbarContainer, Nav } from './Navbar.styled';

export default function Navbar() {
  const { color } = useTheme();
  return (
    <NavbarContainer color={color}>
      <Nav>
        <Link to='/' className='brand'>
          <h4>Purple Puppy</h4>
          <h4 className='brandName'>Recipes</h4>
        </Link>

        <Link to='/create'>Create</Link>
      </Nav>
    </NavbarContainer>
  );
}
