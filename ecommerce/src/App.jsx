import React from 'react'
import { Homepage } from './components/pages/Homepage'
import { Navbar } from './components/layout/Navbar'
import { Login } from './components/pages/Login'
import { Routes, Route,useLocation } from 'react-router-dom'
import { Item } from './components/pages/Item'
import { Dashboard } from './components/pages/Dashboard'
import { Report } from './components/pages/Report'
import { Register } from './components/pages/Register'

function App() {
  const location = useLocation();

  const routesExempt = ['/dashboard', '/report'];
  const hideNavbar = routesExempt.includes(location.pathname);
  return (
    <>
      {!hideNavbar && <Navbar />}
        <Routes>
            <Route path="/item/:id" element={<Item />} />
            <Route path="/" element={<Homepage />}/>
            <Route path="/login" element={<Login title="Login page"/>} />
            <Route path="/dashboard" element={<Dashboard title="Dashboard"/>} />
            <Route path="/report" element={<Report />} />
            <Route path="/register" element={<Register title="Register"/>} />
        </Routes>
    </>
  )
}

export default App
