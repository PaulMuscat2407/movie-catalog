import { Card, CardContent, CardMedia, Typography, Box, Chip, Stack } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import PersonIcon from '@mui/icons-material/Person';
const MovieCard = ({ movie }) => (
  <Card sx={{
    display: 'flex',
    flexDirection: 'column',
    height: 500,
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: 4
    }
  }}>
    <Box sx={{ height: 300, position: 'relative', overflow: 'hidden' }}>
      <CardMedia component="img" image='https://via.placeholder.com/300x300' alt={movie.title} sx={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', transition: 'transform 0.3s ease', '&:hover': { transform: 'scale(1.05)' } }} />
    </Box>
    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', height: 200, overflow: 'hidden' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
        <Typography variant='h6' component='h3' sx={{ flexGrow: 1, fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical' }}>
          {movie.title}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: 'primary.main', color: 'primary.contrastText', px: 1, py: 0.5, borderRadius: 1, ml: 1, fontSize: '0.875rem', flexShrink: 0 }}>
          <StarIcon sx={{ fontSize: '1rem', mr: 0.5 }} />
          <Typography variant="body2" component="span">
            {movie.rating.toFixed(1)}
          </Typography>
        </Box>
      </Box>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
        {movie.year} • {movie.genre.join(', ')}
      </Typography>

      <Stack spacing={1} sx={{ mb: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <MovieCreationIcon fontSize="small" sx={{ mr: 0.5, flexShrink: 0 }} />

          <Typography variant="body2" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {movie.director}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
          <PersonIcon fontSize="small" sx={{ mr: 0.5, mt: 0.3, flexShrink: 0 }} />
          <Typography
            variant="body2"
            sx={{
              lineHeight: 1.4,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 1,
              WebkitBoxOrient: 'vertical',
              width: '100%'
            }}
          >
            {/* Show only the first two actors with ellipsis if more than 2 */}
            {movie.actors.length > 2
              ? `${movie.actors[0]}, ${movie.actors[1]}...`
              : movie.actors.join(', ')}
          </Typography>
        </Box>
      </Stack>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 'auto', overflow: 'hidden', maxHeight: 32 }}>
        {movie.genre.map((genre) => (
          <Chip
            key={genre}
            label={genre}
            size="small"
            color="secondary"
            variant="outlined"
          />
        ))}
      </Box>
    </CardContent>
  </Card>
);

export default MovieCard;
