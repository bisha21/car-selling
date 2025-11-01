import { Outlet } from 'react-router-dom';
import Header from './component/navbar';
import Footer from './component/footer';

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
