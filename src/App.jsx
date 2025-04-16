import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import Homepage from './assets/pages/Homepage'
import StaticLayout from './assets/layout/StaticLayout'
import AboutPage from './assets/pages/AboutPage'
import PostsPage from './assets/pages/PostsPage'
import ContactPage from "./assets/components/ContactsSection"

function App() {
  return (
    <>
      <Routes >
         <Route index element={<Homepage />} />
         <Route element={<StaticLayout />} > 
           <Route path={'/about'} element={<AboutPage />} />
           <Route path={'/posts'} element={<PostsPage />} />
           <Route path={'/contact'} element={<ContactPage />} />
         </Route>
      </Routes>
    </>
  )
}

export default App
