import React from 'react'
import NotificationBar from './NotificationBar'
import Header from './Header'
import Footer from './Footer'
import BackToTop from './BackToTop'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default Layout
