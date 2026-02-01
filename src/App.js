import { BrowserRouter, Routes, Route } from "react-router-dom";

import Contact from "./pages/Contact";
import HospitalSignup from "./pages/HospitalSignup";
import UserSignup from "./pages/UserSignup";
import DoctorSignup from "./pages/DoctorSignup";
import Login from "./pages/Login";
import Notifications from "./pages/Notifications";
import Home from "./pages/Home";
import JoinCuraBook from "./pages/JoinCura";
import AboutUs from "./pages/AboutUs";

// New Pages
import DoctorDashboard from "./pages/DoctorDashboard";
import PatientManagement from "./pages/PatientManagement";
import NewPatientRecord from "./pages/NewPatientRecord";
import PatientRecordDetails from "./pages/PatientRecordDetails";
import PatientAppointments from "./pages/PatientAppointments";
import ProfileSettings from "./pages/ProfileSettings";

// import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact-Us" element={<Contact />} />
        <Route path="/hospital-signup" element={<HospitalSignup />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/doctor-signup" element={<DoctorSignup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/join" element={<JoinCuraBook />} />
        <Route path="About-Us" element={<AboutUs />} />
        
        {/* Doctor Dashboard Routes */}
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/patient-management" element={<PatientManagement />} />
        <Route path="/new-patient-record" element={<NewPatientRecord />} />
        <Route path="/patient-record-details/:id" element={<PatientRecordDetails />} />
        <Route path="/patient-appointments" element={<PatientAppointments />} />
        <Route path="/profile-settings" element={<ProfileSettings />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
