﻿// <auto-generated />
using System;
using MedicalApp;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace MedicalApp.Migrations
{
    [DbContext(typeof(ApplicationDatabaseContext))]
    [Migration("20230506152523_ModifiedAdminEntity")]
    partial class ModifiedAdminEntity
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("MedicalApp.Models.Domain.Admin", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Admins");
                });

            modelBuilder.Entity("MedicalApp.Models.Domain.AnalysisResults", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("AnalysisId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("PatientId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<double>("Result")
                        .HasColumnType("float");

                    b.HasKey("Id");

                    b.HasIndex("AnalysisId");

                    b.HasIndex("PatientId");

                    b.ToTable("Results");
                });

            modelBuilder.Entity("MedicalApp.Models.Domain.Doctor", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("DateOfBirth")
                        .HasColumnType("datetime2");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Gender")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Phone")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Doctors");
                });

            modelBuilder.Entity("MedicalApp.Models.Domain.HomeAddress", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("City")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("District")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid>("PatientId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("PhoneNumber")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PostalCode")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("PatientId")
                        .IsUnique();

                    b.ToTable("HomeAddresses");
                });

            modelBuilder.Entity("MedicalApp.Models.Domain.LaboratoryAnalysis", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("ReferenceRange")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TestName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Units")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("LaboratoryAnalyses");
                });

            modelBuilder.Entity("MedicalApp.Models.Domain.Nurse", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("DateOfBirth")
                        .HasColumnType("datetime2");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Gender")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Phone")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Nurses");
                });

            modelBuilder.Entity("MedicalApp.Models.Domain.Patient", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Diagnostic")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid>("DoctorId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Treatment")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("DoctorId");

                    b.ToTable("Patients");
                });

            modelBuilder.Entity("MedicalApp.Models.Domain.PersonalDetails", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<int>("Age")
                        .HasColumnType("int");

                    b.Property<DateTime>("DateOfBirth")
                        .HasColumnType("datetime2");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Gender")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("IdentityNo")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MaritalStatus")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Nationality")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Occupation")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid>("PatientId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Religion")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("PatientId")
                        .IsUnique();

                    b.ToTable("PersonalDetails");
                });

            modelBuilder.Entity("MedicalApp.Models.Domain.VitalSigns", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Allergen")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("AllergyType")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("BloodPressure")
                        .HasColumnType("float");

                    b.Property<double>("BloodSugar")
                        .HasColumnType("float");

                    b.Property<int>("HeartRate")
                        .HasColumnType("int");

                    b.Property<double>("Height")
                        .HasColumnType("float");

                    b.Property<Guid>("PatientId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<int>("RespiratoryRate")
                        .HasColumnType("int");

                    b.Property<double>("Temperature")
                        .HasColumnType("float");

                    b.Property<double>("Weight")
                        .HasColumnType("float");

                    b.HasKey("Id");

                    b.HasIndex("PatientId")
                        .IsUnique();

                    b.ToTable("VitalSigns");
                });

            modelBuilder.Entity("MedicalApp.Models.Domain.AnalysisResults", b =>
                {
                    b.HasOne("MedicalApp.Models.Domain.LaboratoryAnalysis", "LaboratoryAnalysis")
                        .WithMany("Laboratories")
                        .HasForeignKey("AnalysisId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("MedicalApp.Models.Domain.Patient", null)
                        .WithMany("Results")
                        .HasForeignKey("PatientId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("LaboratoryAnalysis");
                });

            modelBuilder.Entity("MedicalApp.Models.Domain.HomeAddress", b =>
                {
                    b.HasOne("MedicalApp.Models.Domain.Patient", "Patient")
                        .WithOne("HomeAddress")
                        .HasForeignKey("MedicalApp.Models.Domain.HomeAddress", "PatientId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Patient");
                });

            modelBuilder.Entity("MedicalApp.Models.Domain.Patient", b =>
                {
                    b.HasOne("MedicalApp.Models.Domain.Doctor", "Doctor")
                        .WithMany("Patients")
                        .HasForeignKey("DoctorId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Doctor");
                });

            modelBuilder.Entity("MedicalApp.Models.Domain.PersonalDetails", b =>
                {
                    b.HasOne("MedicalApp.Models.Domain.Patient", "Patient")
                        .WithOne("PersonalDetails")
                        .HasForeignKey("MedicalApp.Models.Domain.PersonalDetails", "PatientId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Patient");
                });

            modelBuilder.Entity("MedicalApp.Models.Domain.VitalSigns", b =>
                {
                    b.HasOne("MedicalApp.Models.Domain.Patient", "Patient")
                        .WithOne("VitalSigns")
                        .HasForeignKey("MedicalApp.Models.Domain.VitalSigns", "PatientId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Patient");
                });

            modelBuilder.Entity("MedicalApp.Models.Domain.Doctor", b =>
                {
                    b.Navigation("Patients");
                });

            modelBuilder.Entity("MedicalApp.Models.Domain.LaboratoryAnalysis", b =>
                {
                    b.Navigation("Laboratories");
                });

            modelBuilder.Entity("MedicalApp.Models.Domain.Patient", b =>
                {
                    b.Navigation("HomeAddress")
                        .IsRequired();

                    b.Navigation("PersonalDetails")
                        .IsRequired();

                    b.Navigation("Results");

                    b.Navigation("VitalSigns")
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
