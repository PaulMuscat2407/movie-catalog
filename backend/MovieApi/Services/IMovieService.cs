using MovieApi.Models;
namespace MovieApi.Services
{
    public interface IMovieService
    {
        List<Movie> GetAllMovies();
    }
}