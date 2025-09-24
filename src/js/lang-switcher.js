// Language switcher functionality
(function() {
  'use strict';
  
  const langSwitcher = document.querySelector('.language-switcher');
  const langToggle = document.querySelector('.lang-toggle');
  const langMenu = document.querySelector('.lang-menu');
  
  if (!langSwitcher || !langToggle || !langMenu) return;
  
  let isMenuOpen = false;
  
  // Toggle menu visibility
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    langToggle.setAttribute('aria-expanded', isMenuOpen.toString());
    
    if (isMenuOpen) {
      langMenu.style.opacity = '1';
      langMenu.style.visibility = 'visible';
      langMenu.style.transform = 'translateY(0)';
    } else {
      langMenu.style.opacity = '0';
      langMenu.style.visibility = 'hidden';
      langMenu.style.transform = 'translateY(-10px)';
    }
  }
  
  // Close menu
  function closeMenu() {
    if (isMenuOpen) {
      isMenuOpen = false;
      langToggle.setAttribute('aria-expanded', 'false');
      langMenu.style.opacity = '0';
      langMenu.style.visibility = 'hidden';
      langMenu.style.transform = 'translateY(-10px)';
    }
  }
  
  // Handle click on toggle
  langToggle.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    toggleMenu();
  });
  
  // Handle keyboard navigation
  langToggle.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMenu();
    } else if (e.key === 'Escape') {
      closeMenu();
    }
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!langSwitcher.contains(e.target)) {
      closeMenu();
    }
  });
  
  // Close menu when pressing Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });
  
  // Handle menu item navigation with keyboard
  const menuItems = langMenu.querySelectorAll('a');
  menuItems.forEach(function(item, index) {
    item.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const nextIndex = (index + 1) % menuItems.length;
        menuItems[nextIndex].focus();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prevIndex = (index - 1 + menuItems.length) % menuItems.length;
        menuItems[prevIndex].focus();
      } else if (e.key === 'Escape') {
        closeMenu();
        langToggle.focus();
      }
    });
  });
  
  // Set initial ARIA attributes
  langToggle.setAttribute('aria-expanded', 'false');
  langToggle.setAttribute('aria-haspopup', 'true');
})(); 