import { Routes, Route } from 'react-router-dom';
import MainLayout from './layout';
import Home from './pages/home';
import ModelsPage from './pages/modals/page';
import ModelDetailPage from './pages/modals/detail/page';
import AboutUs from './pages/about/page';
import ProfilePage from './pages/profile/page';

export default function App() {
  return (
    <Routes>
      {/* All pages using MainLayout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/modals" element={<ModelsPage />} />
        <Route path="/modals/:id" element={<ModelDetailPage />} />

        <Route path="/about" element={<AboutUs />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}
