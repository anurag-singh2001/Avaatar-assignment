// Navbar.js

import React, { useState, useEffect } from 'react';
import './style.css';

const Navbar = () => {
  const [menuItems, setMenuItems] = useState([
    'Home',
    'Electronics',
    'Books',
    'Music',
    'Movies',
    'Clothing',
    'Games',
    'Furniture',
    'Electronics',
    'Travel',
    'Botanical',
    'Category name',
  ]);

  const [visibleItems, setVisibleItems] = useState([]);
  const [hiddenItems, setHiddenItems] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const updateMenu = () => {
    const screenWidth = window.innerWidth;
    const itemWidth = 160;

    let visible, hidden;
    if (screenWidth > 480) {
      const maxItems = Math.floor(screenWidth / itemWidth);
      visible = menuItems.slice(0, maxItems - 3);
      hidden = menuItems.slice(maxItems - 3);
      setVisibleItems(visible);
      setHiddenItems(hidden);
    } else {
      setVisibleItems([]);
      setHiddenItems(menuItems);
    }
  };

  useEffect(() => {
    updateMenu();
    window.addEventListener('resize', updateMenu);

    return () => {
      window.removeEventListener('resize', updateMenu);
    };
  }, [menuItems]);

  const handleMenuItemClick = (menuItem) => {
    // Handle the click event for menu items (if needed)
    console.log(`Clicked on: ${menuItem}`);
  };

  return (
    <div className="navbar">
      <div className="menu">
        {visibleItems.map((item, index) => (
          <div
            className="visible-items"
            key={index}
            onClick={() => handleMenuItemClick(item)}
          >
            {item}
          </div>
        ))}
        {hiddenItems.length > 0 && (
          <div className="more-items" onClick={() => setMenuOpen(!menuOpen)}>
            <div>{visibleItems.length === 0 ? 'menu' : 'More'}</div>
            {menuOpen && (
              <div className="hidden-items">
                {hiddenItems.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleMenuItemClick(item)}
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search something" />
      </div>
    </div>
  );
};

export default Navbar;
