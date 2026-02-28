import { useState } from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '@/pages/Home';
import ProjectDetail from '@/pages/ProjectDetail';
import About from '@/pages/About';
import { Preloader } from '@/components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <BrowserRouter>
        <SmoothScroll>
          <Routes>
            <Route path="/" element={<Home preloaderDone={!loading} />} />
            <Route path="/work/:slug" element={<ProjectDetail />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </SmoothScroll>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
