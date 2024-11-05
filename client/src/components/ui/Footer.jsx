import React from 'react';

const Footer = () => {
  return (
        <div className="flex w-full flex-col items-center justify-between gap-4 md:gap-0 lg:flex-row">
          <div className="flex w-full flex-col gap-2 px-1 font-normal text-gray-700 md:w-auto md:flex-row md:items-center md:gap-8">
            <p className="text-sm">&copy; 2025 Rentify, Inc.</p>
          </div>
        </div>
  );
};

export default Footer;
