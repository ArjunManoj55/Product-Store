import { FaShoppingCart, FaPlus, FaSun, FaMoon } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [isDark, setIsDark] = useState(true); // true = dark mode
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsDark(!isDark);
  };

  return (
    <nav
      className={`flex items-center justify-between px-6 py-4 border-b ${
        isDark
          ? 'bg-gray-900 text-white border-gray-700'
          : 'bg-white text-black border-gray-300'
      }`}
    >
      {/* Left side - Logo */}
      <div className="flex items-center gap-2"
      onClick={() => navigate('/')}
      >
        <h1 className="text-cyan-400 font-bold text-lg">PRODUCT STORE</h1>
        <FaShoppingCart className="text-cyan-400 text-xl" />
      </div>

      {/* Right side - Buttons */}
      <div className="flex items-center gap-4">
        <button
          className="bg-gray-700 p-2 rounded"
          onClick={() => navigate('/create')}
        >
          <FaPlus className="text-white" />
        </button>

        <button onClick={handleToggle} className="bg-gray-700 p-2 rounded">
          {isDark ? (
            <FaSun className="text-white" />
          ) : (
            <FaMoon className="text-white" />
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
