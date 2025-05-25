import { Card, CardContent, CardMedia, Typography, Box, Chip, Stack } from '@mui/material';

// const MovieCard = ({ movie }) => (
//   <Card sx={{ minHeight: 200 }}>
//     <CardContent>
//       <Typography variant="h6" gutterBottom>
//         {movie.title} ({movie.year})
//       </Typography>

//       <Typography variant="subtitle2" color="text.secondary">
//         Directed by {movie.director}
//       </Typography>

//       <Stack direction="row" spacing={1} my={1} flexWrap="wrap">
//         {movie.genre.map((g, i) => (
//           <Chip key={i} label={g} size="small" />
//         ))}
//       </Stack>

//       <Typography variant="body2">⭐ Rating: {movie.rating}</Typography>
//       <Typography variant="body2">🎭 Actors: {movie.actors.join(', ')}</Typography>
//     </CardContent>
//   </Card>
// );

// export default MovieCard;

export default function MovieCard({ movie }) {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', height: 500,
                transition: 'all 0.3s ease','&:hover': {transform: 'translateY(-4px)',boxShadow: 4}
              }}
    >
    <Box sx={{ height: 300, position: 'relative', overflow: 'hidden', backgroundColor: '#f5f5f5' }}>
      <CardMedia component="img" alt={movie.title}
        sx={{ width: '100%',height: '100%',objectFit: 'contain',objectPosition: 'center',
                      transition: 'transform 0.3s ease','&:hover': {transform: 'scale(1.05)'}
            }}
      />
    </Box>
    
    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column',height: 200, overflow: 'hidden'}}>
      <Typography variant="h6" gutterBottom>
        {movie.title} ({movie.year})
       </Typography>

       <Typography variant="subtitle2" color="text.secondary">
        Directed by {movie.director}
       </Typography>

       <Stack direction="row" spacing={1} my={1} flexWrap="wrap">
         {movie.genre.map((g, i) => (
          <Chip key={i} label={g} size="small" />
        ))}
      </Stack>

      <Typography variant="body2">⭐ Rating: {movie.rating}</Typography>
      <Typography variant="body2">🎭 Actors: {movie.actors.join(', ')}</Typography>
    </CardContent>
  </Card>
  );
}

// import { 
//   Card, 
//   CardContent, 
//   CardMedia, 
//   Typography, 
//   Box, 
//   Chip,
//   Stack
// } from "@mui/material";
// import { 
//   Star as StarIcon, 
//   MovieCreation as MovieIcon, 
//   Person as PersonIcon 
// } from "@mui/icons-material";

// // Stock movie poster images for each movie
// const stockPosters = {
//   "The Shawshank Redemption": "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
//   "The Godfather": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
//   "The Dark Knight": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
//   "Inception": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg"
// };

// // Default placeholder in case a specific movie doesn't have a stock image
// const defaultPoster = "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg";

// export default function MovieCard({ movie }) {
//   // Get the stock poster image or use the default
//   const posterImage = stockPosters[movie.title] || defaultPoster;
  
//   return (
//     <Card 
//       sx={{ 
//         display: 'flex', 
//         flexDirection: 'column', 
//         height: 500, // Fixed height for uniform size
//         transition: 'all 0.3s ease',
//         '&:hover': {
//           transform: 'translateY(-4px)',
//           boxShadow: 4
//         }
//       }}
//     >
//       <Box sx={{ 
//         height: 300, 
//         position: 'relative',
//         overflow: 'hidden',
//         backgroundColor: posterImage === defaultPoster ? '#f5f5f5' : 'transparent'
//       }}>
//         <CardMedia
//           component="img"
//           image={posterImage}
//           alt={movie.title}
//           sx={{ 
//             width: '100%',
//             height: '100%',
//             objectFit: 'contain',
//             objectPosition: 'center',
//             transition: 'transform 0.3s ease',
//             '&:hover': {
//               transform: 'scale(1.05)'
//             }
//           }}
//         />
//       </Box>
//       <CardContent sx={{ 
//         flexGrow: 1, 
//         display: 'flex', 
//         flexDirection: 'column',
//         height: 200, // Fixed content height
//         overflow: 'hidden' // Prevent content from expanding the card
//       }}>
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
//           <Typography 
//             variant="h6" 
//             component="h3" 
//             sx={{ 
//               flexGrow: 1, 
//               fontWeight: 500,
//               overflow: 'hidden',
//               textOverflow: 'ellipsis',
//               display: '-webkit-box',
//               WebkitLineClamp: 1,
//               WebkitBoxOrient: 'vertical'
//             }}
//           >
//             {movie.title}
//           </Typography>
//           <Box 
//             sx={{ 
//               display: 'flex',
//               alignItems: 'center',
//               bgcolor: 'primary.main',
//               color: 'primary.contrastText',
//               px: 1,
//               py: 0.5,
//               borderRadius: 1,
//               ml: 1,
//               fontSize: '0.875rem',
//               flexShrink: 0
//             }}
//           >
//             <StarIcon sx={{ fontSize: '1rem', mr: 0.5 }} />
//             <Typography variant="body2" component="span">
//               {movie.rating.toFixed(1)}
//             </Typography>
//           </Box>
//         </Box>
        
//         <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
//           {movie.year} • {movie.genre.join(', ')}
//         </Typography>
        
//         <Stack spacing={1} sx={{ mb: 1 }}>
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <MovieIcon fontSize="small" sx={{ mr: 0.5, flexShrink: 0 }} />
//             <Typography 
//               variant="body2"
//               sx={{
//                 overflow: 'hidden',
//                 textOverflow: 'ellipsis',
//                 whiteSpace: 'nowrap'
//               }}
//             >
//               {movie.director}
//             </Typography>
//           </Box>
          
//           <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
//             <PersonIcon fontSize="small" sx={{ mr: 0.5, mt: 0.3, flexShrink: 0 }} />
//             <Typography 
//               variant="body2" 
//               sx={{ 
//                 lineHeight: 1.4,
//                 overflow: 'hidden',
//                 textOverflow: 'ellipsis',
//                 display: '-webkit-box',
//                 WebkitLineClamp: 1,
//                 WebkitBoxOrient: 'vertical',
//                 width: '100%'
//               }}
//             >
//               {/* Show only the first two actors with ellipsis if more than 2 */}
//               {movie.actors.length > 2 
//                 ? `${movie.actors[0]}, ${movie.actors[1]}...`
//                 : movie.actors.join(', ')}
//             </Typography>
//           </Box>
//         </Stack>
        
//         <Box 
//           sx={{ 
//             display: 'flex', 
//             flexWrap: 'wrap', 
//             gap: 0.5, 
//             mt: 'auto',
//             overflow: 'hidden',
//             maxHeight: 32 // Limit the height of genre chips
//           }}
//         >
//           {movie.genre.map((genre) => (
//             <Chip
//               key={genre}
//               label={genre}
//               size="small"
//               color="secondary"
//               variant="outlined"
//             />
//           ))}
//         </Box>
//       </CardContent>
//     </Card>
//   );
// }

