import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchButton, SearchForm, SearchInput } from './SearchBar.styled';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search?q=${searchTerm}`);
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <label className='search' htmlFor='search'>
        Search:
      </label>
      <SearchInput
        type='text'
        id='search'
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
        required
      />
      <SearchButton type='submit'>Go</SearchButton>
    </SearchForm>
  );
}
