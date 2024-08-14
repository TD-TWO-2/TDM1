import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Service from '../Pages/Services'
import Contactus from '../Pages/Contactus'
import RegisterNow from '../Pages/RegisterNow'
import Demo from '../Pages/Demo'
import TreedecDashboard from '../Pages/TreedecDashboard'

const Routing = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Service" element={<Service />} />
      <Route path="/Contactus" element={<Contactus />} />
      <Route path="/RegisterNow" element={<RegisterNow />} />
      <Route path="/Demo" element={<Demo />} />
      <Route path="/TreedecDashboard" element={<TreedecDashboard />} />
    </Routes>
  </BrowserRouter>
  )
}

export default Routing