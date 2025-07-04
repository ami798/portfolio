import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? '#0f0f0f' : '#ffffff';
    document.body.style.color = darkMode ? '#f8f8f8' : '#111111';
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      style={{
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1.2rem',
        color: darkMode ? '#f8f8f8' : '#333',
      }}
      title="Toggle Dark/Light Mode"
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
}

export default ThemeToggle;
