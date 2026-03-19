using BowlingAPI.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers().AddJsonOptions(options =>
{
    options.JsonSerializerOptions.ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.IgnoreCycles;
});
// Use just the filename so it looks in the project folder itself
builder.Services.AddDbContext<BowlingLeagueContext>(options =>
    options.UseSqlite("Data Source=BowlingLeague.sqlite")
);

// --- ADDED: CORS Policy for React ---
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        policy =>
        {
            policy.WithOrigins("http://localhost:3000") // This is the port React uses
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

var app = builder.Build();

// Configure the HTTP request pipeline.

// --- ADDED: Enable CORS ---
app.UseCors("AllowReactApp");

app.UseAuthorization();
app.MapControllers();
app.Run();