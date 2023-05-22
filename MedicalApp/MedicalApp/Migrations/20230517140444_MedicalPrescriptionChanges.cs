using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MedicalApp.Migrations
{
    /// <inheritdoc />
    public partial class MedicalPrescriptionChanges : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MedicalPrescription_Patients_PatientId",
                table: "MedicalPrescription");

            migrationBuilder.DropPrimaryKey(
                name: "PK_MedicalPrescription",
                table: "MedicalPrescription");

            migrationBuilder.RenameTable(
                name: "MedicalPrescription",
                newName: "MedicalPrescriptions");

            migrationBuilder.RenameIndex(
                name: "IX_MedicalPrescription_PatientId",
                table: "MedicalPrescriptions",
                newName: "IX_MedicalPrescriptions_PatientId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_MedicalPrescriptions",
                table: "MedicalPrescriptions",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_MedicalPrescriptions_Patients_PatientId",
                table: "MedicalPrescriptions",
                column: "PatientId",
                principalTable: "Patients",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MedicalPrescriptions_Patients_PatientId",
                table: "MedicalPrescriptions");

            migrationBuilder.DropPrimaryKey(
                name: "PK_MedicalPrescriptions",
                table: "MedicalPrescriptions");

            migrationBuilder.RenameTable(
                name: "MedicalPrescriptions",
                newName: "MedicalPrescription");

            migrationBuilder.RenameIndex(
                name: "IX_MedicalPrescriptions_PatientId",
                table: "MedicalPrescription",
                newName: "IX_MedicalPrescription_PatientId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_MedicalPrescription",
                table: "MedicalPrescription",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_MedicalPrescription_Patients_PatientId",
                table: "MedicalPrescription",
                column: "PatientId",
                principalTable: "Patients",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
