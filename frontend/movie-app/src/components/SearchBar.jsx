import { TextField, Box } from '@mui/material';

const SearchBar = ({ searchText, setSearchText }) => (
  <Box my={2}>
    <TextField
      label="Search by Title"
      variant="outlined"
      fullWidth
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
    />
  </Box>
);

export default SearchBar;
