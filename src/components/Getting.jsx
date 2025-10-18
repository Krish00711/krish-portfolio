import React from 'react';
import { FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';

const Getting = () => {
  const iconStyle = "text-gray-300 hover:text-cyan-400 border border-gray-600 rounded-lg p-3 hover:border-cyan-400 transition-colors duration-300";

  return (
    <div className="flex items-center justify-center space-x-4">
      <button className="bg-teal-500 hover:bg-teal-600 text-black text-lg py-3 px-6 rounded-lg transition-colors">
        View My Work
      </button>

      <a 
        href="https://github.com/Krish00711" 
        target="_blank" 
        rel="noopener noreferrer"
        className={iconStyle}
      >
        <FaGithub size={24}/>
      </a>

      <a 
        href="https://www.linkedin.com/in/krishna-sharma-a4272b238/"
        target="_blank" 
        rel="noopener noreferrer"
        className={iconStyle}
      >
        <FaLinkedin size={24} />
      </a>

      <a 
        href="https://discord.com/users/your-user-id"
        target="_blank" 
        rel="noopener noreferrer"
        className={iconStyle}
      >
        <FaDiscord size={24} />
      </a>
    </div>
  );
};

export default Getting;
