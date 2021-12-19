import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import AddServices from './Dashboard/AddServices/AddServices';
import Dashboard from './Dashboard/Dashboard/Dashboard';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Home/Login/Login';
import Register from './Pages/Home/Register/Register';


function App() {
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, [])
  return (
    <div className="App">

      <AuthProvider>
        <BrowserRouter>

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="home" element={<Home />}></Route>
            <Route path="dashboard" element={<Dashboard />}>

              <Route path={`/dashboard/AddServices`} element={AddServices}></Route>

            </Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="Register" element={<Register />}></Route>
          </Routes>

        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
