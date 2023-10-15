'use client';

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

const ScrollTopBtn = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);

    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  return (
    <div
      className={`${
        showScroll ? 'fixed' : 'hidden'
      } bottom-4 right-4 h-10 w-10 flex justify-center items-center bg-gray-950/50 hover:bg-gray-900/50 text-slate-50 rounded-full cursor-pointer z-30 transition`}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <FontAwesomeIcon icon={faAngleUp} />
    </div>
  );
};
export default ScrollTopBtn;
