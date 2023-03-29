import './App.css';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import LoginPage from "./pages/LoginPage"
import DoctorPage from "./pages/DoctorPage"
import PatientPage from "./pages/PatientPage"
import NursePage from './pages/NursePage';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={< LoginPage />}></Route>
          <Route exact path='/doctorpage' element={< DoctorPage />}></Route>
          <Route exact path='/patientpage' element={<PatientPage />}></Route>
          <Route exact path='/nursepage' element={<NursePage />}></Route>
        </Routes>
      </Router>
      </div>
  );
}

export default App;
