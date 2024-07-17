/** @format */

import { TextField } from '@mui/material';

const Search = (props: any) => {
  const { onChange, value } = props;

  return (
    <TextField
      label='search'
      variant='standard'
      fullWidth
      type='search'
      value={value}
      onChange={onChange}
      sx={{ mb: '1rem' }}
    />
  );
};

export default Search;
