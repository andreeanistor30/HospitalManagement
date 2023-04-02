import './App.css';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import LoginPage from "./pages/LoginPage"
import DoctorPage from "./pages/DoctorPage"
import PatientPage from "./pages/PatientPage"
import NurseMainPage from './pages/NurseMainPage';
import NurseAddPatientPage from './pages/NurseAddPatientPage';
import NurseDischargePatientPage from './pages/NurseDischargePatientPage';
import Settings from './pages/SettingsPage';
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
          <Route exact path='/settings' element={<Settings />}></Route>
        </Routes>
      </Router>
      </div>
  );
}

export default App;
