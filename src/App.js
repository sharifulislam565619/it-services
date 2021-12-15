import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard/Dashboard/Dashboard';
import Home from './Pages/Home/Home/Home';


function App() {
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, [])
  return (
    <div className="App">

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="dashboard" element={<Dashboard />}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
