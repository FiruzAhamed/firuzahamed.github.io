import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Publications from './pages/Publications';
import Events from './pages/Events';
import Recordings from './pages/Recordings';
import Lab from './pages/Lab';

const pages: Record<string, React.ComponentType> = {
  home: Home,
  publications: Publications,
  events: Events,
  recordings: Recordings,
  lab: Lab,
};

function getPageFromHash(): string {
  const hash = window.location.hash.replace('#', '') || 'home';
  return pages[hash] ? hash : 'home';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState(getPageFromHash);

  useEffect(() => {
    const onHashChange = () => setCurrentPage(getPageFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = (page: string) => {
    window.location.hash = page === 'home' ? '' : page;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const PageComponent = pages[currentPage] || Home;

  return (
    <div className="flex flex-col min-h-screen bg-[#fafbfc]">
      <Navbar currentPage={currentPage} onNavigate={navigate} />
      <main className="flex-1 pt-16">
        <PageComponent />
      </main>
      <Footer />
    </div>
  );
}
