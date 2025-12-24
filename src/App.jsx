import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Team from './pages/Team'
import About from './pages/About'
import Sponsors from './pages/Sponsors'
import BlogAutonomy from './pages/blog/Autonomy'
import BlogMechanical from './pages/blog/Mechanical'
import BlogElectrical from './pages/blog/Electrical'
import BlogOutreach from './pages/blog/Outreach'
import BlogFishNShips from './pages/blog/FishNShips'
import BlogYear22 from './pages/blog/Year22'
import BlogYear23 from './pages/blog/Year23'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/blog/autonomy" element={<BlogAutonomy />} />
        <Route path="/blog/mechanical" element={<BlogMechanical />} />
        <Route path="/blog/electrical" element={<BlogElectrical />} />
        <Route path="/blog/outreach" element={<BlogOutreach />} />
        <Route path="/blog/fish-n-ships" element={<BlogFishNShips />} />
        <Route path="/blog/year-22" element={<BlogYear22 />} />
        <Route path="/blog/year-23" element={<BlogYear23 />} />
      </Routes>
    </Layout>
  )
}

export default App
