import { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import AboutPage from './pages/AboutPage'
import BoardPage from './pages/BoardPage'
import CareersPage from './pages/CareersPage'
import HomePage from './pages/HomePage'
import LifelinePage from './pages/LifelinePage'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname =
    typeof window !== 'undefined'
      ? window.location.pathname.replace(/\/+$/, '') || '/'
      : '/'

  const toggleMenu = () => {
    setIsMenuOpen((open) => !open)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const renderPage = () => {
    if (pathname === '/about') {
      return <AboutPage />
    }

    if (pathname === '/board-of-directors') {
      return <BoardPage />
    }

    if (pathname === '/careers') {
      return <CareersPage />
    }

    if (pathname === '/lifeline') {
      return <LifelinePage />
    }

    return <HomePage />
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(43,74,182,0.16),_transparent_28%),linear-gradient(180deg,_#f9fbff_0%,_#eef3ff_44%,_#f7f4ef_100%)] text-slate-700">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
        <Header
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          closeMenu={closeMenu}
        />
        {renderPage()}
        <Footer />
      </div>
    </div>
  )
}

export default App
