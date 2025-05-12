import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import BlogPage from './pages/BlogPage';
import ChaoticFilePage from './pages/ChaoticFilePage';
import SingleBlogPage from "./pages/SingleBlogPage";
import Projects from './pages/ProjectsPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/chaotic" element={<ChaoticFilePage />} />
      <Route path="/blog/:id" element={<SingleBlogPage />} />
      <Route path="/projects" element={<Projects />} />

    </Routes>
  );
}
