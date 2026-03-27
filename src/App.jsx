import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useTheme } from "./hooks/useTheme";
import AboutPage from "./pages/AboutPage";
import BoardPage from "./pages/BoardPage";
import CareersPage from "./pages/CareersPage";
import HomePage from "./pages/HomePage";
import LifelinePage from "./pages/LifelinePage";

function getCurrentPath() {
  if (typeof window === "undefined") {
    return "/";
  }

  const currentPath = window.location.pathname;
  const pathWithoutEndingSlash = currentPath.replace(/\/+$/, "");

  return pathWithoutEndingSlash || "/";
}

function getPageForPath(pathname) {
  if (pathname === "/about") {
    return <AboutPage />;
  }

  if (pathname === "/board-of-directors") {
    return <BoardPage />;
  }

  if (pathname === "/careers") {
    return <CareersPage />;
  }

  if (pathname === "/lifeline") {
    return <LifelinePage />;
  }

  return <HomePage />;
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = getCurrentPath();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const currentHash = window.location.hash;

    if (!currentHash) {
      return;
    }

    const sectionId = decodeURIComponent(currentHash.slice(1));

    const scrollToHash = () => {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    const animationFrameId = window.requestAnimationFrame(scrollToHash);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen((menuIsOpen) => !menuIsOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(228,195,123,0.12),transparent_18%),linear-gradient(180deg,#20398e_0%,#2b4ab6_42%,#20398e_100%)] text-slate-700 dark:bg-none dark:bg-slate-950 dark:text-slate-300">
      <Header
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        closeMenu={closeMenu}
        pathname={pathname}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      {getPageForPath(pathname)}
      <Footer />
    </div>
  );
}

export default App;
