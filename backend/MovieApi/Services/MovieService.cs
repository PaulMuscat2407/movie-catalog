using System.Text.Json;
using MovieApi.Models;

namespace MovieApi.Services;

public class MovieService : IMovieService
{
    private readonly IWebHostEnvironment _env;
    private List<Movie> _cachedMovies;

    public MovieService(IWebHostEnvironment env)
    {
        _env = env;
    }

    public List<Movie> GetAllMovies()
    {
        if (_cachedMovies != null)
            return _cachedMovies;

        var filePath = Path.Combine(_env.ContentRootPath, "Data", "movies.json");
        var json = File.ReadAllText(filePath);
        var root = JsonSerializer.Deserialize<MovieRoot>(json, new JsonSerializerOptions
        {
            PropertyNameCaseInsensitive = true
        });

        _cachedMovies = root?.Movies ?? new List<Movie>();
        return _cachedMovies;
    }

    private class MovieRoot
    {
        public List<Movie> Movies { get; set; }
    }
}
