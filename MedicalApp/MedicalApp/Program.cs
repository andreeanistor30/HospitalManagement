using MedicalApp;
using MedicalApp.Service.AdminService;
using MedicalApp.Service.AnalysisResultsService;
using MedicalApp.Service.DoctorService;
using MedicalApp.Service.HomeAddressService;
using MedicalApp.Service.LaboratoryAnalysisService;
using MedicalApp.Service.LoginService;
using MedicalApp.Service.MedicalPrescriptionService;
using MedicalApp.Service.NurseService;
using MedicalApp.Service.PatientService;
using MedicalApp.Service.VitalSignsService;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<ApplicationDatabaseContext>(options => options.UseSqlServer("DefaultConnection"));
builder.Services.AddControllers().AddNewtonsoftJson(options => options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);
builder.Services.AddScoped<ILoginService, LoginService>();
builder.Services.AddScoped<IPersonalDetailsService,PersonalDetailsService>();
builder.Services.AddScoped<IPatientService,PatientService>();
builder.Services.AddScoped<IHomeAddressService,HomeAddressService>();
builder.Services.AddScoped<IVitalSignsService, VitalSignsService>();
builder.Services.AddScoped<ILaboratoryAnalysisService,LaboratoryAnalysisService>();
builder.Services.AddScoped<IAnalysisResultsService, AnalysisResultsService>();
builder.Services.AddScoped<INurseService, NurseService>();
builder.Services.AddScoped<IDoctorService, DoctorService>();
builder.Services.AddScoped<IAdminService, AdminService>();
builder.Services.AddScoped<IMedicalPrescriptionService, MedicalPrescriptionService>();
builder.Services.AddMvcCore();

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

builder.Services.AddCors(options =>
{
    options.AddPolicy(MyAllowSpecificOrigins,
                          policy =>
                          {
                              policy.WithOrigins("http://localhost:3000")
                                                  .AllowAnyHeader()
                                                  .AllowAnyMethod();
                          });
});

var app = builder.Build();
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseDeveloperExceptionPage();
}
else
{
    app.UseExceptionHandler();
}

app.UseHttpsRedirection();
app.UseCors(MyAllowSpecificOrigins);
app.UseRouting();
app.UseAuthorization();


app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});

app.Run();
