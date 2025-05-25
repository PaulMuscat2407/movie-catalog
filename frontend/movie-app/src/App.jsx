import React, { useEffect, useState, useMemo } from 'react';
import { Container, Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { fetchMovies } from './api';
import MovieCard from './components/MovieCard';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import AppBar from './components/AppBar';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchMovies().then(setMovies);
  }, []);

  const filteredMovies = useMemo(() => {
    if (!searchText.trim()) {
      return movies;
    }
    
    return movies.filter(movie =>
      movie.title.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [movies, searchText]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <AppBar />
        
        <Box component="main" sx={{ flexGrow: 1, py: 4, bgcolor: 'background.default' }}>
          <Container maxWidth="xl">
            <SearchBar searchText={searchText} setSearchText={setSearchText} />
            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: { 
                xs: '1fr', 
                sm: 'repeat(2, 1fr)', 
                md: 'repeat(3, 1fr)', 
                lg: 'repeat(4, 1fr)',
                xl: 'repeat(4, 1fr)'
              }, 
              gap: 3,
              px: 2,
              justifyContent: 'center',
              mx: 'auto'
            }}>
              {filteredMovies.map((movie, index) => (
                <MovieCard key={index} movie={movie} />
              ))}
            </Box>
          </Container>
        </Box>

        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;