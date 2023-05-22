using TarefasApi.Endpoints;
using TarefasApi.Extensions;

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
        policy =>
        {
            policy.WithOrigins("http://localhost:4200",
                                "http://localhost:4200/tarefas")
            .AllowAnyHeader()
           .AllowAnyMethod();

        });
});

builder.AddPersistence();

var app = builder.Build();

app.MapTarefasEndpoints();
app.UseCors(MyAllowSpecificOrigins);
app.Run();
