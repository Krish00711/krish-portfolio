import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Projects = () => {
  return (
    <div className='mt-[100px] flex flex-col items-center flex-wrap p-4'>
      <div className='flex flex-col items-center text-center'>
        <h1 className='text-white text-3xl font-bold pb-2'>Featured Projects</h1>
        <p className='text-gray-400 text-lg max-w-2xl'>A selection of projects that demonstrate my skills and passion for web development</p>
      </div>

      <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl'>

        <div className='bg-slate-900 border border-gray-700 rounded-lg overflow-hidden group'>
          <div className='overflow-hidden h-64'>
            <img 
              src="/net.png"
              alt="Netflix Clone Project Screenshot" 
              className='w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500'
            />
          </div>
          <div className='p-6'>
            <h3 className='text-2xl font-bold text-white'>Netflix Clone</h3>
            <p className='text-gray-400 mt-2'>A responsive front-end clone of the Netflix UI, fetching movie data from the TMDB API to display dynamic content.</p>
            <div className='mt-4 flex flex-wrap gap-2'>
              <span className='bg-gray-800 text-cyan-400 text-sm font-semibold px-3 py-1 rounded-full'>React</span>
              <span className='bg-gray-800 text-cyan-400 text-sm font-semibold px-3 py-1 rounded-full'>Tailwind CSS</span>
              <span className='bg-gray-800 text-cyan-400 text-sm font-semibold px-3 py-1 rounded-full'>API</span>
            </div>
            <div className='mt-6 flex items-center space-x-4'>
              <a href="#" className='flex items-center space-x-2 bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-lg transition-colors'>
                <FiExternalLink />
                <span>Live Demo</span>
              </a>
              <a href="https://github.com/Krish00711/Netflix-Clone" target="_blank" rel="noopener noreferrer" className='flex items-center space-x-2 text-gray-300 hover:text-white font-bold py-2 px-4 rounded-lg border border-gray-600 hover:border-white transition-colors'>
                <FiGithub />
                <span>Code</span>
              </a>
            </div>
          </div>
        </div>

        <div className='bg-slate-900 border border-gray-700 rounded-lg overflow-hidden group'>
          <div className='overflow-hidden h-64'>
            <img 
              src="/image.png"
              alt="Heart Disease Prediction Project Screenshot" 
              className='w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500'
            />
          </div>
          <div className='p-6'>
            <h3 className='text-2xl font-bold text-white'>Heart Disease Prediction</h3>
            <p className='text-gray-400 mt-2'>A machine learning model built to predict the likelihood of heart disease based on patient data, using various classification algorithms.</p>
            <div className='mt-4 flex flex-wrap gap-2'>
              <span className='bg-gray-800 text-cyan-400 text-sm font-semibold px-3 py-1 rounded-full'>Python</span>
              <span className='bg-gray-800 text-cyan-400 text-sm font-semibold px-3 py-1 rounded-full'>Scikit-learn</span>
              <span className='bg-gray-800 text-cyan-400 text-sm font-semibold px-3 py-1 rounded-full'>Pandas</span>
            </div>
            <div className='mt-6 flex items-center space-x-4'>
              <a href="#" className='flex items-center space-x-2 bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-lg transition-colors'>
                <FiExternalLink />
                <span>Live Demo</span>
              </a>
              <a href="https://github.com/Krish00711/Heart-Disease-Prediction" target="_blank" rel="noopener noreferrer" className='flex items-center space-x-2 text-gray-300 hover:text-white font-bold py-2 px-4 rounded-lg border border-gray-600 hover:border-white transition-colors'>
                <FiGithub />
                <span>Code</span>
              </a>
            </div>
          </div>
        </div>

      </div>
        <div className="mt-12">
            <a href="https://github.com/Krish00711" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-white font-bold py-3 px-6 rounded-lg border-2 border-gray-600 hover:border-white transition-colors">
                <span>View All Projects on GitHub</span>
                <FiExternalLink />
            </a>
        </div>
    </div>
  )
}

export default Projects

