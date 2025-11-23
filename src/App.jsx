import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Personal from './pages/portfolio/Personal'
import Couple from './pages/portfolio/Couple'
import Wedding from './pages/portfolio/Wedding'
import Event from './pages/portfolio/Event'
import Lifestyle from './pages/portfolio/Lifestyle'
import Street from './pages/portfolio/Street'
import Landscape from './pages/portfolio/Landscape'
import Motion from './pages/portfolio/Motion'
import AlbumDetail from './pages/portfolio/AlbumDetail'

function App() {
  return (
    <Router 
      basename="/ELMO.H-Photopraphy"
      future={{
        v7_startTransition: true,
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/personal" element={<Personal />} />
        <Route path="/portfolio/personal/:albumId" element={<AlbumDetail category="personal" />} />
        <Route path="/portfolio/couple" element={<Couple />} />
        <Route path="/portfolio/couple/:albumId" element={<AlbumDetail category="couple" />} />
        <Route path="/portfolio/wedding" element={<Wedding />} />
        <Route path="/portfolio/wedding/:albumId" element={<AlbumDetail category="wedding" />} />
        <Route path="/portfolio/event" element={<Event />} />
        <Route path="/portfolio/event/:albumId" element={<AlbumDetail category="event" />} />
        <Route path="/portfolio/lifestyle" element={<Lifestyle />} />
        <Route path="/portfolio/lifestyle/:albumId" element={<AlbumDetail category="lifestyle" />} />
        <Route path="/portfolio/street" element={<Street />} />
        <Route path="/portfolio/landscape" element={<Landscape />} />
        <Route path="/portfolio/motion" element={<Motion />} />
      </Routes>
    </Router>
  )
}

export default App
