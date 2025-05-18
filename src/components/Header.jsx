import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiSearch, FiMoon, FiSun } from 'react-icons/fi';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [darkMode, setDarkMode] = useState(true);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-red-600">adi ki aditi </Link>
        <div className="flex items-center space-x-4">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search movies..."
              className="bg-gray-800 text-white rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <FiSearch />
            </button>
          </form>
          <button onClick={toggleDarkMode} className="text-xl">
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </div>
    </header>
  );
}