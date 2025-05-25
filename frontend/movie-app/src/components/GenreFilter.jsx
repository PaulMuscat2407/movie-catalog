import { Box, InputLabel, MenuItem, Select, OutlinedInput, Checkbox, ListItemText } from '@mui/material';

const GenreFilter = ({ genres, selected, setSelected }) => (
  <Box mb={2}>
    <InputLabel id="genre-label">Filter by Genre</InputLabel>
    <Select
      labelId="genre-label"
      multiple
      fullWidth
      value={selected}
      onChange={(e) => setSelected(e.target.value)}
      input={<OutlinedInput label="Genre" />}
      renderValue={(selected) => selected.join(', ')}
    >
      {genres.map((genre) => (
        <MenuItem key={genre} value={genre}>
          <Checkbox checked={selected.includes(genre)} />
          <ListItemText primary={genre} />
        </MenuItem>
      ))}
    </Select>
  </Box>
);

export default GenreFilter;
