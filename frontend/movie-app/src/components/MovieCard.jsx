import { Card, CardContent, CardMedia, Typography, Box, Chip, Stack } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import PersonIcon from '@mui/icons-material/Person';

const MovieCard = ({ movie }) => (
  <Card sx={{
    display: 'flex',
    flexDirection: 'column',
    height: 520,
    borderRadius: 2,
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
    },
    bgcolor: 'background.paper'
  }}>
    <Box sx={{ height: 320, position: 'relative', overflow: 'hidden' }}>
      <CardMedia 
        component="img" 
        image='https://via.placeholder.com/300x400/1976d2/ffffff?text=Movie+Poster' 
        alt={movie.title} 
        sx={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover',
          transition: 'transform 0.3s ease',
          '&:hover': { transform: 'scale(1.05)' }
        }} 
      />
      <Box sx={{ 
        position: 'absolute', 
        top: 12, 
        right: 12, 
        display: 'flex', 
        alignItems: 'center', 
        bgcolor: 'rgba(0,0,0,0.8)', 
        color: 'white', 
        px: 1.5, 
        py: 0.5, 
        borderRadius: 2,
        backdropFilter: 'blur(4px)'
      }}>
        <StarIcon sx={{ fontSize: '1rem', mr: 0.5, color: '#ffc107' }} />
        <Typography variant="body2" component="span" sx={{ fontWeight: 600 }}>
          {movie.rating.toFixed(1)}
        </Typography>
      </Box>
    </Box>

    <CardContent sx={{ 
      flexGrow: 1, 
      display: 'flex', 
      flexDirection: 'column', 
      p: 2.5,
      '&:last-child': { pb: 2.5 }
    }}>
      <Typography 
        variant='h6' 
        component='h3' 
        sx={{ 
          fontWeight: 600, 
          mb: 1,
          overflow: 'hidden', 
          textOverflow: 'ellipsis', 
          display: '-webkit-box', 
          WebkitLineClamp: 2, 
          WebkitBoxOrient: 'vertical',
          lineHeight: 1.3,
          minHeight: '2.6em'
        }}
      >
        {movie.title}
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontWeight: 500 }}>
        {movie.year} • {movie.genre.slice(0, 2).join(', ')}
      </Typography>

      <Stack spacing={1.5} sx={{ mb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <MovieCreationIcon fontSize="small" sx={{ mr: 1, color: 'primary.main' }} />
          <Typography 
            variant="body2" 
            sx={{ 
              overflow: 'hidden', 
              textOverflow: 'ellipsis', 
              whiteSpace: 'nowrap',
              fontWeight: 500
            }}
          >
            {movie.director}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
          <PersonIcon fontSize="small" sx={{ mr: 1, mt: 0.1, color: 'secondary.main' }} />
          <Typography
            variant="body2"
            sx={{
              lineHeight: 1.4,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              height: '2.8em',
              minHeight: '2.8em'
            }}
          >
            {movie.actors.length > 2
              ? `${movie.actors.slice(0, 2).join(', ')}...`
              : movie.actors.join(', ')}
          </Typography>
        </Box>
      </Stack>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 'auto' }}>
        {movie.genre.slice(0, 3).map((genre) => (
          <Chip
            key={genre}
            label={genre}
            size="small"
            variant="filled"
            color='primary'
            sx={{ 
              fontSize: '0.75rem',
              height: 24,
              color: 'white',
              cursor: 'default',
            }}
          />
        ))}
      </Box>
    </CardContent>
  </Card>
);

export default MovieCard;