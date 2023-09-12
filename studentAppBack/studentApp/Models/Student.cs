using System.ComponentModel.DataAnnotations;

namespace studentApp.Models
{
    public class Student
    {
        [Key]
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string? StudentPhoto { get; set; }
        public string? Note { get; set; }
    }
}
