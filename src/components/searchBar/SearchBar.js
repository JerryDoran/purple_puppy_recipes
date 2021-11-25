import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SearchButton, SearchForm, SearchInput } from './SearchBar.styled';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    history.push(`/search?q=${searchTerm}`);
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
      <SearchButton type="submit">Go</SearchButton>
    </SearchForm>
  );
}
