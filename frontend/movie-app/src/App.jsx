import { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { fetchMovies } from './api';
import MovieCard from './components/MovieCard';
import GenreFilter from './components/GenreFilter';
import SearchBar from './components/SearchBar';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies().then(setMovies);
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Movie Catalog
      </Typography>
      <SearchBar></SearchBar>
      {/* <GenreFilter/> */}

      <Grid container spacing={2}>
        {movies.map((movie, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default App;
