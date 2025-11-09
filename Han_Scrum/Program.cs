using scrumvoting;
using scrumvoting.Controllers;
using scrumvoting.Hubs;
using scrumvoting.Model;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllersWithViews();
builder.Services.AddSingleton<Session>();
builder.Services.AddSingleton<SessionController>();
builder.Services.AddSignalR();

var app = builder.Build();

app.UseStaticFiles();
app.UseRouting();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.UseCors(options =>
    options.WithOrigins("http://localhost", "http://localhost:44471")
    .AllowAnyMethod()
    .AllowAnyHeader()
    .AllowCredentials()
);

app.MapHub<ActiveUsersHub>("/activeUsersHub");

app.Run();
