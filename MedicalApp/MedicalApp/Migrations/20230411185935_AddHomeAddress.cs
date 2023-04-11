using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MedicalApp.Migrations
{
    /// <inheritdoc />
    public partial class AddHomeAddress : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_HomeAddress_Patients_PatientId",
                table: "HomeAddress");

            migrationBuilder.DropPrimaryKey(
                name: "PK_HomeAddress",
                table: "HomeAddress");

            migrationBuilder.RenameTable(
                name: "HomeAddress",
                newName: "HomeAddresses");

            migrationBuilder.RenameIndex(
                name: "IX_HomeAddress_PatientId",
                table: "HomeAddresses",
                newName: "IX_HomeAddresses_PatientId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_HomeAddresses",
                table: "HomeAddresses",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_HomeAddresses_Patients_PatientId",
                table: "HomeAddresses",
                column: "PatientId",
                principalTable: "Patients",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_HomeAddresses_Patients_PatientId",
                table: "HomeAddresses");

            migrationBuilder.DropPrimaryKey(
                name: "PK_HomeAddresses",
                table: "HomeAddresses");

            migrationBuilder.RenameTable(
                name: "HomeAddresses",
                newName: "HomeAddress");

            migrationBuilder.RenameIndex(
                name: "IX_HomeAddresses_PatientId",
                table: "HomeAddress",
                newName: "IX_HomeAddress_PatientId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_HomeAddress",
                table: "HomeAddress",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_HomeAddress_Patients_PatientId",
                table: "HomeAddress",
                column: "PatientId",
                principalTable: "Patients",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
