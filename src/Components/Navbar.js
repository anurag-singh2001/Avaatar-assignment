// Navbar.js

import React, { useState, useEffect, useCallback } from 'react';
//import { TextField, Search } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import { AiOutlineSearch } from "react-icons/ai";
import './style.css'; // Import your custom CSS file

const Navbar = () => {
  const [menuItems] = useState([
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

  const updateMenu = useCallback(() => {
    const screenWidth = window.innerWidth;
    const itemWidth = 120;

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
  }, [menuItems]);

  useEffect(() => {
    updateMenu();
    window.addEventListener('resize', updateMenu);

    return () => {
      window.removeEventListener('resize', updateMenu);
    };
  }, [menuItems, updateMenu]);

  const handleMenuItemClick = (menuItem) => {
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
          <div className="more-dropdown">
            <div onClick={() => setMenuOpen(!menuOpen)}>
              {visibleItems.length === 0 ? 'menu' : 'More'}
            </div>
            {menuOpen && (
              <div className="dropdown-content">
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
        <AiOutlineSearch className="search-symbol" size={20}  />
        <TextField  label="Search" variant="standard" className="text-field-input" InputProps={{ style: { color: 'white' } }}
    InputLabelProps={{ style: { color: 'white' } }} />
      </div>


    </div>
  );
};

export default Navbar;
