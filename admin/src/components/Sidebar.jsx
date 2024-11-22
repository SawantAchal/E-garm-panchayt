import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-darkBg text-white w-64 p-6 h-screen fixed shadow-lg">
      <h2 className="text-2xl font-bold mb-8 text-center">Admin Dashboard</h2>
      <ul className="space-y-6">
        <li>
          <NavLink to="/addService" className={({ isActive }) => `block p-3 rounded-lg transition ${ isActive ? 'bg-primary text-white' : 'text-gray-300 hover:bg-primary hover:text-white' }` }>
            Add Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/allService" className={({ isActive }) => `block p-3 rounded-lg transition ${ isActive ? 'bg-primary text-white' : 'text-gray-300 hover:bg-primary hover:text-white' }` } >
            All Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/addStaff" className={({ isActive }) => `block p-3 rounded-lg transition ${ isActive ? 'bg-primary text-white' : 'text-gray-300 hover:bg-primary hover:text-white' }` } >
            Add Staff
          </NavLink>
        </li>
        <li>
          <NavLink to="/allStaff" className={({ isActive }) => `block p-3 rounded-lg transition ${ isActive ? 'bg-primary text-white' : 'text-gray-300 hover:bg-primary hover:text-white' }` } >
            All Staff
          </NavLink>
        </li>
        <li>
          <NavLink to="/allApplication" className={({ isActive }) => `block p-3 rounded-lg transition ${ isActive ? 'bg-primary text-white' : 'text-gray-300 hover:bg-primary hover:text-white' }` } >
            All Applications
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
