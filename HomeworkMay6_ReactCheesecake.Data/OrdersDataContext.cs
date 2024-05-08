using Microsoft.EntityFrameworkCore;

namespace HomeworkMay6_ReactCheesecake.Data;

public class OrdersDataContext : DbContext
{
    private readonly string _connectionString;

    public OrdersDataContext(string connectionString)
    {
        _connectionString = connectionString;
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer(_connectionString);
    }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        foreach (var relationship in modelBuilder.Model.GetEntityTypes().SelectMany(e => e.GetForeignKeys()))
        {
            relationship.DeleteBehavior = DeleteBehavior.Restrict;
        }
        base.OnModelCreating(modelBuilder);
        modelBuilder.Entity<Order>()
            .Property(p => p.Total)
            .HasColumnType("decimal(18,4)");
    }
    public DbSet<Order> Orders { get; set; }
}