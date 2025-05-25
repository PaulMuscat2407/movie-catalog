import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, Box, CssBaseline } from '@mui/material';
import { fetchMovies } from './api';
import MovieCard from './components/MovieCard';
import Footer from './components/Footer';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies().then(setMovies);
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <div className='min-h-screen flex flex-col'>
        <main className="flex-grow container mx-auto px-4 py-6">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }, gap: 3 }}>
            {movies.map((movie, index) => (
              <Box key={index}>
                <MovieCard movie={movie} />
              </Box>
            ))}
          </Box>
        </main>

        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
