import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import AboutPage from './pages/AboutPage'
import BoardPage from './pages/BoardPage'
import CareersPage from './pages/CareersPage'
import HomePage from './pages/HomePage'
import LifelinePage from './pages/LifelinePage'

function getCurrentPath() {
  if (typeof window === 'undefined') {
    return '/'
  }

  const currentPath = window.location.pathname
  const pathWithoutEndingSlash = currentPath.replace(/\/+$/, '')

  return pathWithoutEndingSlash || '/'
}

function getPageForPath(pathname) {
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

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = getCurrentPath()

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const currentHash = window.location.hash

    if (!currentHash) {
      return
    }

    const sectionId = decodeURIComponent(currentHash.slice(1))

    const scrollToHash = () => {
      const section = document.getElementById(sectionId)

      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }

    const animationFrameId = window.requestAnimationFrame(scrollToHash)

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [pathname])

  const toggleMenu = () => {
    setIsMenuOpen((menuIsOpen) => !menuIsOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(43,74,182,0.16),transparent_28%),linear-gradient(180deg,#f9fbff_0%,#eef3ff_44%,#f7f4ef_100%)] text-slate-700">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
        <Header
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          closeMenu={closeMenu}
          pathname={pathname}
        />
        {getPageForPath(pathname)}
        <Footer />
      </div>
    </div>
  )
}

export default App
