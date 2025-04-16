import React from 'react'
import Header from '../components/Header'
import MainSection from "../components/MainSection"
import Footer from "../components/Footer"
import InfoBtn from '../components/InfoBtn'

export default function Homepage() {
  return (
    <div className='main-sc'>
       <Header/>
       <MainSection />
       <Footer />
       <InfoBtn />
    </div>
  )
}
