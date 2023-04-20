namespace MedicalApp.Service.NurseService
{
    public interface INurseService
    {
        public bool ChangePassword(string firstName, string lastName, string password);
    }
}
