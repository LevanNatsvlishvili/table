import React from 'react';
import SimpleInput from 'components/inputs/InputField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';

const Search = (props) => {
  const { handleSearch, search } = props;

  return (
    <SimpleInput
      onChange={handleSearch}
      value={search}
      endAdornment={
        <InputAdornment position='end' >
          <SearchIcon />
        </InputAdornment>
      }
      placeholder="Search" />
  );
}

export default Search;