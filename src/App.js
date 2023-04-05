import './App.css';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import LoginPage from "./pages/LoginPage"
import DoctorPage from "./pages/DoctorPage"
import PatientPage from "./pages/PatientPage"
import NurseMainPage from './pages/NurseMainPage';
import NurseAddPatientPage from './pages/NurseAddPatientPage';
import NurseDischargePatientPage from './pages/NurseDischargePatientPage';
import SettingsPage from './pages/SettingsPage';
import ChangePasswordPage from './pages/ChangePasswordPage'
import VitalSignsPage from './pages/VitalSignsPage'
import PatientInfoPage from './pages/PatientInfoPage';
import LaboratoryPage from './pages/LaboratoryNursePage';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={< LoginPage />}></Route>
          <Route exact path='/doctorpage' element={< DoctorPage />}></Route>
          <Route exact path='/patientpage' element={<PatientPage />}></Route>
          <Route exact path='/nursemainpage' element={<NurseMainPage />}></Route>
          <Route exact path='/addpatient' element={<NurseAddPatientPage />}></Route>
          <Route exact path='/dischargepatient' element={<NurseDischargePatientPage />}></Route>
          <Route exact path='/settings' element={<SettingsPage />}></Route>
          <Route exact path='/vitalsigns' element={<VitalSignsPage />}></Route>
          <Route exact path='/changepassword' element={<ChangePasswordPage />}></Route>
          <Route exact path='/patientinfo' element={<PatientInfoPage />}></Route>
          <Route exact path='/laboratory' element={<LaboratoryPage />}></Route>
        </Routes>
      </Router>
      </div>
  );
}

export default App;
