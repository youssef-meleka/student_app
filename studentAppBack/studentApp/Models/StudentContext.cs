using Microsoft.AspNetCore.Authentication;
using Microsoft.EntityFrameworkCore;

namespace studentApp.Models
{
    public class StudentContext : DbContext
    {
        public DbSet<Student> Students  { get; set; }

        public StudentContext(DbContextOptions options) : base(options) 
        {
        

        
        }

    }
}
