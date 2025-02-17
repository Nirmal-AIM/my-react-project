import React from 'react';
import { Sun } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-[3%] py-4 bg-gradient-to-r from-[#003366] to-[#00b3b3] text-white shadow-md">
      <div className="flex items-center">
        <img src="/images/collage_logo-removebg-preview.png" alt="Left Logo" className="h-24 mr-4" />
      </div>

      <div className="text-center flex-grow">
        <div className="college-name">
          <img src="/images/logo2.png" alt="College Logo" className="h-16 w-[105%] mb-2 ml-20" />
        </div>
        <div className="approval-info">
          <img src="/images/SUB3.png" alt="College Logo" className="w-[40%] ml-20" />
        </div>
      </div>

      <div className="established-info flex items-center pl-5 text-lg pt-[70px]">
        <img src="/images/ESTD1.png" alt="Since 1981" className="w-[40%] mt-2 pt-2" />
      </div>

      <div className="flex items-center">
        <img src="/images/43-removebg-preview.png" alt="Right Logo 2" className="h-24 ml-4" />
      </div>
    </header>
  );
};

export default Header;