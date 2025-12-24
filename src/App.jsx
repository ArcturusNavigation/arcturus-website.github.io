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

// Autonomy blog posts
import Perception from './pages/blog/autonomy/perception'
import Localization from './pages/blog/autonomy/localization'
import PathPlanning from './pages/blog/autonomy/pathplanning'
import Controller from './pages/blog/autonomy/controller'

// Electrical blog posts
import BMS from './pages/blog/electrical/bms'
import BuckBoard from './pages/blog/electrical/buckboard'
import EStop from './pages/blog/electrical/estop'

// Mechanical blog posts
import Hulls from './pages/blog/mechanical/hulls'
import Propulsion from './pages/blog/mechanical/propulsion'
import EEBox from './pages/blog/mechanical/eebox'
import SensorMast from './pages/blog/mechanical/sensormast'
import Mechanisms from './pages/blog/mechanical/mechanisms'

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

        {/* Autonomy blog posts */}
        <Route path="/blog/autonomy/perception" element={<Perception />} />
        <Route path="/blog/autonomy/localization" element={<Localization />} />
        <Route path="/blog/autonomy/pathplanning" element={<PathPlanning />} />
        <Route path="/blog/autonomy/controller" element={<Controller />} />

        {/* Electrical blog posts */}
        <Route path="/blog/electrical/bms" element={<BMS />} />
        <Route path="/blog/electrical/buckboard" element={<BuckBoard />} />
        <Route path="/blog/electrical/estop" element={<EStop />} />

        {/* Mechanical blog posts */}
        <Route path="/blog/mechanical/hulls" element={<Hulls />} />
        <Route path="/blog/mechanical/propulsion" element={<Propulsion />} />
        <Route path="/blog/mechanical/eebox" element={<EEBox />} />
        <Route path="/blog/mechanical/sensormast" element={<SensorMast />} />
        <Route path="/blog/mechanical/mechanisms" element={<Mechanisms />} />
      </Routes>
    </Layout>
  )
}

export default App
