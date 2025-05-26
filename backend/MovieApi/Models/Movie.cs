namespace MovieApi.Models
{
    public class Movie
    {
        public required string Title { get; set; }
        public required int Year { get; set; }
        public required List<string> Genre { get; set; }
        public required string Director { get; set; }
        public required List<string> Actors { get; set; }
        public required double Rating { get; set; }
        public required string imageUrl { get; set; }
    }
}