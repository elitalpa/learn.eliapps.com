// Theme toggle functionality
(function() {
  'use strict';
  
  const themeToggle = document.querySelector('.theme-toggle');
  const htmlElement = document.documentElement;
  
  if (!themeToggle) return;
  
  // Get current theme
  function getCurrentTheme() {
    return htmlElement.getAttribute('data-theme') || 'light';
  }
  
  // Set theme
  function setTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Update button aria-label
    const isLight = theme === 'light';
    themeToggle.setAttribute('aria-label', `Switch to ${isLight ? 'dark' : 'light'} mode`);
  }
  
  // Toggle theme
  function toggleTheme() {
    const currentTheme = getCurrentTheme();
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }
  
  // Initialize
  function init() {
    // Set initial aria-label
    const currentTheme = getCurrentTheme();
    const isLight = currentTheme === 'light';
    themeToggle.setAttribute('aria-label', `Switch to ${isLight ? 'dark' : 'light'} mode`);
    
    // Add event listener
    themeToggle.addEventListener('click', toggleTheme);
    
    // Add keyboard support
    themeToggle.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleTheme();
      }
    });
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})(); 