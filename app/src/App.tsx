import { ThemeProvider } from '@/context/ThemeContext';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '@/pages/Home';
import ProjectDetail from '@/pages/ProjectDetail';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <SmoothScroll>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work/:slug" element={<ProjectDetail />} />
          </Routes>
        </SmoothScroll>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
