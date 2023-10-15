'use client';
import React, { useState } from 'react';

const Burger = ({ isOpen, toggleNav }) => {
  return (
    <div
      id='burger'
      className={'group cursor-pointer space-y-1 transition z-20'}
      onClick={toggleNav}
    >
      <div
        className={
          'bg-gray-400 w-10 h-1 rounded transition group-hover:bg-white' +
          (isOpen ? ' rotate-45 translate-y-1' : '')
        }
      ></div>
      <div
        className={
          'bg-gray-400 w-10 h-1 rounded transition group-hover:bg-white' +
          (isOpen ? ' -rotate-45 -translate-y-1' : '')
        }
      ></div>
    </div>
  );
};
export default Burger;
