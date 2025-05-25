
import { Box, Container, Typography } from '@mui/material';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';

const Footer = () => (
  <Box 
    component="footer" 
    sx={{ 
      bgcolor: 'background.paper', 
      borderTop: 1, 
      borderColor: 'divider', 
      py: 3,
      mt: 'auto'
    }}
  >
    <Container maxWidth="xl">
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' }, 
        justifyContent: 'space-between', 
        alignItems: 'center',
        gap: 2
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <MovieCreationIcon sx={{ mr: 1, color: 'primary.main' }} />
          <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
            MovieDB
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} MovieDB. All rights reserved.
        </Typography>
      </Box>
    </Container>
  </Box>
);

export default Footer;
