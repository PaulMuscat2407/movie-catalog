import { Box, Typography, Chip, Stack } from '@mui/material';

const GenreFilter = ({ genres, selected, setSelected }) => {
  const handleGenreToggle = (genre) => {
    if (selected.includes(genre)) {
      setSelected(selected.filter(g => g !== genre));
    } else {
      setSelected([...selected, genre]);
    }
  };

  const handleClearAll = () => {
    setSelected([]);
  };

  return (
    <Box sx={{ mb: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 2 }}>
        <Typography variant="h6" component="h2" sx={{ fontWeight: 600 }}>
          Filter by Genre
        </Typography>
        {selected.length > 0 && (
          <Chip
            label={`Clear All (${selected.length})`}
            variant="outlined"
            size="small"
            onClick={handleClearAll}
            sx={{ 
              borderColor: 'text.secondary',
              color: 'text.secondary',
              '&:hover': {
                borderColor: 'primary.main',
                color: 'primary.main'
              }
            }}
          />
        )}
      </Box>
      
      <Stack 
        direction="row" 
        spacing={1} 
        sx={{ 
          flexWrap: 'wrap',
          gap: 1,
          '& > *': {
            mb: 1
          }
        }}
      >
        {genres.map((genre) => (
          <Chip
            key={genre}
            label={genre}
            onClick={() => handleGenreToggle(genre)}
            variant={selected.includes(genre) ? 'filled' : 'outlined'}
            color={selected.includes(genre) ? 'primary' : 'default'}
            sx={{
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              '&:hover': {
                transform: 'translateY(-1px)',
                boxShadow: 2
              },
              ...(selected.includes(genre) && {
                color: 'white',
                fontWeight: 600
              })
            }}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default GenreFilter;