import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-darkBg text-white w-64 p-6 h-screen fixed shadow-lg">
      <ul className="space-y-4">
        <li>
          <NavLink to="/allServices" className={({ isActive }) => `block p-3 rounded-lg transition ${ isActive ? 'bg-primary text-white shadow-md' : 'hover:bg-primary hover:text-white' }` }>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className={({ isActive }) => `block p-3 rounded-lg transition ${ isActive ? 'bg-primary text-white shadow-md' : 'hover:bg-primary hover:text-white' }` } >
            Profile
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
