namespace scrumvoting.Model
{
    public class User
    {
        public string Name { get; set; }
        public string Role { get; set; }
        public double Points { get; set; }
        public bool IsAdmin { get; set; }
        public bool HasVoted { get; set; }
        public bool HasForfeited { get; set; }
    }
}
