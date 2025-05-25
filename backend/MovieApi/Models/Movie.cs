namespace MovieApi.Models
{
    public class Movie
    {
        public string Title { get; set; }
        public int Year { get; set; }
        public List<string> Genre { get; set; }
        public string Director { get; set; }
        public List<string> Actors { get; set; }
        public double Rating { get; set; }
    }
}