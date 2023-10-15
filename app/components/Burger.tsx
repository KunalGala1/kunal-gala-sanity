'use client';
import React, { useState } from 'react';

type BurgerProps = {
  isOpen: boolean;
  toggleNav: () => void;
};

const Burger = ({ isOpen, toggleNav }: BurgerProps) => {
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
