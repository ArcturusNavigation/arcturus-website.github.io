import { useEffect } from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
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
import BlogTechnicalWork from './pages/blog/TechnicalWork'
import BlogYear22 from './pages/blog/Year22'
import BlogYear23 from './pages/blog/Year23'
import BlogYear25 from './pages/blog/Year25'
import BlogYear25Autonomy from './pages/blog/Year25Autonomy'
import BlogYear25Electrical from './pages/blog/Year25Electrical'
import BlogYear25Mechanical from './pages/blog/Year25Mechanical'
import BlogYear22Navigation from './pages/blog/Year22Navigation'
import BlogYear22Hullelectronics from './pages/blog/Year22Hullelectronics'
import BlogYear22TaskForce from './pages/blog/Year22TaskForce'
import BlogYear23Mechanics from './pages/blog/Year23Mechanics'
import BlogYear23Electronics from './pages/blog/Year23Electronics'
import BlogYear23Navigation from './pages/blog/Year23Navigation'
import BlogPostWrapper from './pages/blog/BlogPostWrapper'

function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index.html" element={<Navigate to="/" replace />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team.html" element={<Navigate to="/team" replace />} />
        <Route path="/about" element={<About />} />
        <Route path="/about.html" element={<Navigate to="/about" replace />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/sponsors.html" element={<Navigate to="/sponsors" replace />} />
        <Route path="/past-seasons" element={<PastSeasons />} />
        <Route path="/past-seasons.html" element={<Navigate to="/past-seasons" replace />} />
        <Route path="/blog/autonomy" element={<BlogAutonomy />} />
        <Route path="/blog/mechanical" element={<BlogMechanical />} />
        <Route path="/blog/electrical" element={<BlogElectrical />} />
        <Route path="/blog/outreach" element={<BlogOutreach />} />
        <Route path="/technical-work" element={<BlogTechnicalWork />} />
        <Route path="/blog/year-22" element={<BlogYear22 />} />
        <Route path="/blog/year-23" element={<BlogYear23 />} />
        <Route path="/blog/year-25" element={<BlogYear25 />} />
        <Route path="/blog/year-25/autonomy" element={<BlogYear25Autonomy />} />
        <Route path="/blog/year-25/electrical" element={<BlogYear25Electrical />} />
        <Route path="/blog/year-25/mechanical" element={<BlogYear25Mechanical />} />
        <Route path="/blog/year-22/navigation" element={<BlogYear22Navigation />} />
        <Route path="/blog/year-22/hullelectronics" element={<BlogYear22Hullelectronics />} />
        <Route path="/blog/year-22/taskforce" element={<BlogYear22TaskForce />} />
        <Route path="/blog/year-23/mechanics" element={<BlogYear23Mechanics />} />
        <Route path="/blog/year-23/electronics" element={<BlogYear23Electronics />} />
        <Route path="/blog/year-23/navigation" element={<BlogYear23Navigation />} />

        {/* Dynamic blog post route - handles all category/slug combinations */}
        <Route path="/blog/:category/:slug" element={<BlogPostWrapper />} />
      </Routes>
    </Layout>
  )
}

export default App
