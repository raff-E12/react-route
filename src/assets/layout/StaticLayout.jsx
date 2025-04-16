import React from 'react'
import Footer from '../components/Footer'
import { Outlet, Route, Routes } from 'react-router'
import Homepage from '../pages/Homepage'
import Header from '../components/Header'
import InfoBtn from '../components/InfoBtn'

export default function StaticLayout() {
  return (
    <div className='main-sc'>
     <Header />
       <Outlet />
     <Footer />
     <InfoBtn />
    </div>
  )
}
