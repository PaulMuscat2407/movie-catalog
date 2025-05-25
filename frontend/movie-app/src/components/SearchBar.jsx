import { TextField, Box, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { IconButton } from '@mui/material';

const SearchBar = ({ searchText, setSearchText }) => (
  <Box sx={{ mb: 3, maxWidth: 600, mx: 'auto' }}>
    <TextField
      label="Search movies by title, director, actor, or genre"
      variant="outlined"
      fullWidth
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon color="action" />
          </InputAdornment>
        ),
        endAdornment: searchText && (
          <InputAdornment position="end">
            <IconButton
              onClick={() => setSearchText('')}
              edge="end"
              size="small"
            >
              <ClearIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: 2,
          backgroundColor: 'background.paper',
          '&:hover fieldset': {
            borderColor: 'primary.main',
          },
        },
      }}
    />
  </Box>
);

export default SearchBar;