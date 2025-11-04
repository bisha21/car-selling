import { Routes, Route } from 'react-router-dom'; // React Router components
import MainLayout from './layout'; // Layout wrapper for all pages (e.g., header/footer)
import Home from './pages/home'; // Home page component
import ModelsPage from './pages/modals/page'; // Page showing all car models
import ModelDetailPage from './pages/modals/detail/page'; // Page for single car detail
import AboutUs from './pages/about/page'; // About Us page
import ProfilePage from './pages/profile/page'; // User profile page

export default function App() {
  return (
    <Routes>
      {/* All pages wrapped with MainLayout for consistent header/footer/navigation */}
      <Route element={<MainLayout />}>
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Models listing page */}
        <Route path="/models" element={<ModelsPage />} />

        {/* Individual model details page, dynamic :id parameter */}
        <Route path="/models/:id" element={<ModelDetailPage />} />

        {/* About Us page */}
        <Route path="/about" element={<AboutUs />} />

        {/* User profile page */}
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}
