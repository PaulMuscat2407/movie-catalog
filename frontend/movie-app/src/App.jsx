
import React, { useEffect, useState, useMemo } from 'react';
import { Container, Box, CssBaseline, ThemeProvider, createTheme, Pagination } from '@mui/material';
import { fetchMovies } from './api';
import MovieCard from './components/MovieCard';
import SearchBar from './components/SearchBar';
import GenreFilter from './components/GenreFilter';
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
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 12;

  useEffect(() => {
    fetchMovies().then(setMovies);
  }, []);

  const availableGenres = useMemo(() => {
    const genres = new Set();
    movies.forEach(movie => {
      movie.genre.forEach(genre => genres.add(genre));
    });
    return Array.from(genres).sort();
  }, [movies]);

  const filteredMovies = useMemo(() => {
    let filtered = movies;

    if (searchText.trim()) {
      filtered = filtered.filter(movie =>
        movie.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (selectedGenres.length > 0) {
      filtered = filtered.filter(movie =>
        selectedGenres.some(selectedGenre =>
          movie.genre.includes(selectedGenre)
        )
      );
    }

    return filtered;
  }, [movies, searchText, selectedGenres]);

  const paginatedMovies = useMemo(() => {
    const startIndex = (currentPage - 1) * moviesPerPage;
    const endIndex = startIndex + moviesPerPage;
    return filteredMovies.slice(startIndex, endIndex);
  }, [filteredMovies, currentPage, moviesPerPage]);

  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchText, selectedGenres]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <AppBar />
        
        <Box component="main" sx={{ flexGrow: 1, py: 4, bgcolor: 'background.default' }}>
          <Container maxWidth="xl">
            <SearchBar searchText={searchText} setSearchText={setSearchText} />
            <GenreFilter 
              genres={availableGenres} 
              selected={selectedGenres} 
              setSelected={setSelectedGenres} 
            />
            
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
              mx: 'auto',
              mb: 4
            }}>
              {paginatedMovies.map((movie, index) => (
                <MovieCard key={index} movie={movie} />
              ))}
            </Box>

            {totalPages > 1 && (
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <Pagination
                  count={totalPages}
                  page={currentPage}
                  onChange={handlePageChange}
                  color="primary"
                  size="large"
                  showFirstButton
                  showLastButton
                />
              </Box>
            )}
          </Container>
        </Box>

        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
