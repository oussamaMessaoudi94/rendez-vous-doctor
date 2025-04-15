import './App.css';
import Header from './componenet/Header';
import Footer from './componenet/Footer';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './componenet/Home';
import Service from './componenet/Service';
import Contact from './componenet/Contact';
import Appointments from './componenet/Appointments';
import Logins from './componenet/Logins';
import ListeAppoint from './componenet/ListeAppoint';
import NoteDoctor from './componenet/NoteDoctor';
import Archives from './componenet/Archives';
import NoteDoctorArch from './componenet/NoteDoctorArch';
import { ProtectedRoute } from './ProtectRoutes';
import { useSelector } from 'react-redux';


const Layout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/loginAdmin";
  const isLogged = useSelector(state => state.auth.isLogged)
  return (
    <>
      {!isLoginPage && <Header />}
      <Routes>
        <Route element={<ProtectedRoute isAuth={isLogged} />}>
        <Route path="/listeAppoint" element={<ListeAppoint />} />
        <Route path="/listeAppoint/:id" element={<ListeAppoint />} />
        <Route path="/archives" element={<Archives />} />
        <Route path="/archives/:id" element={<Archives />} />
        <Route path="/noteDoctor" element={<NoteDoctor />} />
        <Route path="/noteDoctor/:id" element={<NoteDoctor />} />
        <Route path="/noteDoctorArch" element={<NoteDoctorArch />} />
        <Route path="/noteDoctorArch/:id" element={<NoteDoctorArch />} />
        </Route>
        <Route path="" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/appointments/:id" element={<Appointments />} />
        <Route path="/loginAdmin" element={<Logins />} />
       
      </Routes>
      {!isLoginPage && <Footer />}
    </>
  );
};

function App() {
  return (
    <div>
       <BrowserRouter>
    <Layout />
  </BrowserRouter>
    </div>
  );
}
export default App;
