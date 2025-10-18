import React from 'react';
import { FiArrowDown } from 'react-icons/fi';

const ProfilePicture = () => {
  return (

    <div className='p-10 w-full flex flex-col items-center m-2'>
        <div 
        className="
            relative w-48 h-48 rounded-full p-1 
            bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500
            overflow-hidden flex items-center justify-center shadow-lg
        "
        >
        <img
            src="/minephtot.jpeg" 
            alt="Krish Sharma"
            className="
            w-full h-full object-cover rounded-full
            border-4 border-slate-900
            "
        />
        </div>

        <div className='p-5 flex'>
            <h1 className='text-white text-6xl pr-4'>Hi, I'm</h1>
            <h1 className='text-teal-400 text-6xl'>Krish Sharma</h1>
        </div>

        <div className='text-gray-400 max-w-2xl text-lg mx-auto px-4 text-center'>
            <p>Aspiring Web Developer passionate about creating beautiful, functional, and user-friendly digital experiences</p>
        </div>

    </div>

    
  );
};

export default ProfilePicture;