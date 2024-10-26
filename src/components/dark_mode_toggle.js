import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true'
  );

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', true);
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', false);
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="dark-mode-toggle">
      <label>
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={toggleDarkMode}
        />
        Dark Mode
      </label>
    </div>
  );
};

export default DarkModeToggle;
