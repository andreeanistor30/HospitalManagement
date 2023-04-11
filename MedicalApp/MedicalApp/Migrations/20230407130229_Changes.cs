using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MedicalApp.Migrations
{
    /// <inheritdoc />
    public partial class Changes : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Results_Analyses_LaboratoryAnalysisId",
                table: "Results");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Analyses",
                table: "Analyses");

            migrationBuilder.RenameTable(
                name: "Analyses",
                newName: "LaboratoryAnalyses");

            migrationBuilder.AddPrimaryKey(
                name: "PK_LaboratoryAnalyses",
                table: "LaboratoryAnalyses",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Results_LaboratoryAnalyses_LaboratoryAnalysisId",
                table: "Results",
                column: "LaboratoryAnalysisId",
                principalTable: "LaboratoryAnalyses",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Results_LaboratoryAnalyses_LaboratoryAnalysisId",
                table: "Results");

            migrationBuilder.DropPrimaryKey(
                name: "PK_LaboratoryAnalyses",
                table: "LaboratoryAnalyses");

            migrationBuilder.RenameTable(
                name: "LaboratoryAnalyses",
                newName: "Analyses");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Analyses",
                table: "Analyses",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Results_Analyses_LaboratoryAnalysisId",
                table: "Results",
                column: "LaboratoryAnalysisId",
                principalTable: "Analyses",
                principalColumn: "Id");
        }
    }
}
