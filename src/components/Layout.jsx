import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <header className="bg-gray-800 text-white p-4">
        <nav className="flex gap-6 max-w-4xl mx-auto">
          <Link to="/">Главная</Link>
          <Link to="/about">О нас</Link>
          <Link to="/posts">Посты</Link>
        </nav>
      </header>

      <main className="flex-grow max-w-4xl w-full mx-auto p-6">
        <Outlet />
      </main>

      <footer className="bg-gray-100 p-4 text-center border-t text-gray-600 font-medium">
        © 2025
      </footer>
    </div>
  );
};

export default Layout;