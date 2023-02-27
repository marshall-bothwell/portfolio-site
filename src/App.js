import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import ProjectsPage from './pages/ProjectsPage'

import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL} >
      <Header />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/contact" element={ <ContactPage /> } />
        <Route path="/projects" element={ <ProjectsPage /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;