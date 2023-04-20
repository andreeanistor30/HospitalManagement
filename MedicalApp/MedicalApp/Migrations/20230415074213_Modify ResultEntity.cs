using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MedicalApp.Migrations
{
    /// <inheritdoc />
    public partial class ModifyResultEntity : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Results_LaboratoryAnalyses_LaboratoryAnalysisId",
                table: "Results");

            migrationBuilder.DropIndex(
                name: "IX_Results_LaboratoryAnalysisId",
                table: "Results");

            migrationBuilder.DropColumn(
                name: "LaboratoryAnalysisId",
                table: "Results");

            migrationBuilder.CreateIndex(
                name: "IX_Results_AnalysisId",
                table: "Results",
                column: "AnalysisId");

            migrationBuilder.AddForeignKey(
                name: "FK_Results_LaboratoryAnalyses_AnalysisId",
                table: "Results",
                column: "AnalysisId",
                principalTable: "LaboratoryAnalyses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Results_LaboratoryAnalyses_AnalysisId",
                table: "Results");

            migrationBuilder.DropIndex(
                name: "IX_Results_AnalysisId",
                table: "Results");

            migrationBuilder.AddColumn<Guid>(
                name: "LaboratoryAnalysisId",
                table: "Results",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Results_LaboratoryAnalysisId",
                table: "Results",
                column: "LaboratoryAnalysisId");

            migrationBuilder.AddForeignKey(
                name: "FK_Results_LaboratoryAnalyses_LaboratoryAnalysisId",
                table: "Results",
                column: "LaboratoryAnalysisId",
                principalTable: "LaboratoryAnalyses",
                principalColumn: "Id");
        }
    }
}
