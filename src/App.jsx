import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Team from './pages/Team'
import About from './pages/About'
import Sponsors from './pages/Sponsors'
import PastSeasons from './pages/PastSeasons'
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

// Outreach blog posts
import Spark2023 from './pages/blog/outreach/spark2023'
import CPW from './pages/blog/outreach/cpw'
import Azores from './pages/blog/outreach/azores'
import OCEANS2023 from './pages/blog/outreach/oceans2023'
import DiscoverOceanEngineering from './pages/blog/outreach/discoveroceanengineering'
import AluminumCobblers from './pages/blog/outreach/aluminumcobblers'
import BlueInnovationsSymposium from './pages/blog/outreach/blueinnovationssymposium'
import CambridgeScienceFestival2022 from './pages/blog/outreach/cambridgesciencefestival2022'
import CambridgeScienceFestival2024 from './pages/blog/outreach/cambridgesciencefestival2024'
import EdgertonCenterShowcase from './pages/blog/outreach/edgertoncentersh owcase'
import HealthOfThePlanet from './pages/blog/outreach/healthoftheplanet'
import MITCorp from './pages/blog/outreach/mitcorp'
import WeCodeHarvardConference from './pages/blog/outreach/wecodeharvardconference'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/past-seasons" element={<PastSeasons />} />
        <Route path="/blog/autonomy" element={<BlogAutonomy />} />
        <Route path="/blog/mechanical" element={<BlogMechanical />} />
        <Route path="/blog/electrical" element={<BlogElectrical />} />
        <Route path="/blog/outreach" element={<BlogOutreach />} />
        <Route path="/technical-work" element={<BlogFishNShips />} />
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

        {/* Outreach blog posts */}
        <Route path="/blog/outreach/spark2023" element={<Spark2023 />} />
        <Route path="/blog/outreach/cpw" element={<CPW />} />
        <Route path="/blog/outreach/azores" element={<Azores />} />
        <Route path="/blog/outreach/oceans2023" element={<OCEANS2023 />} />
        <Route path="/blog/outreach/discoveroceanengineering" element={<DiscoverOceanEngineering />} />
        <Route path="/blog/outreach/aluminumcobblers" element={<AluminumCobblers />} />
        <Route path="/blog/outreach/blueinnovationssymposium" element={<BlueInnovationsSymposium />} />
        <Route path="/blog/outreach/cambridgesciencefestival2022" element={<CambridgeScienceFestival2022 />} />
        <Route path="/blog/outreach/cambridgesciencefestival2024" element={<CambridgeScienceFestival2024 />} />
        <Route path="/blog/outreach/edgertoncentersh owcase" element={<EdgertonCenterShowcase />} />
        <Route path="/blog/outreach/healthoftheplanet" element={<HealthOfThePlanet />} />
        <Route path="/blog/outreach/mitcorp" element={<MITCorp />} />
        <Route path="/blog/outreach/wecodeharvardconference" element={<WeCodeHarvardConference />} />
      </Routes>
    </Layout>
  )
}

export default App
