
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';

const CustomAppBar = () => (
  <AppBar position="static" sx={{ bgcolor: 'primary.main', boxShadow: 1 }}>
    <Toolbar>
      <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
        <MovieCreationIcon sx={{ mr: 2, fontSize: '2rem' }} />
        <Typography variant="h5" component="h1" sx={{ fontWeight: 600 }}>
          MovieDB
        </Typography>
      </Box>
    </Toolbar>
  </AppBar>
);

export default CustomAppBar;
