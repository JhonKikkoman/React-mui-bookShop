/** @format */

import { TextField } from '@mui/material';

interface propT {
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const Search = (props: propT) => {
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
