import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* 
        Main content area grows to fill available space.
        Adding pt-24 to account for the fixed navbar height 
      */}
      <main className="flex-grow pt-24 px-6">
        <div className="max-w-6xl mx-auto w-full">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
