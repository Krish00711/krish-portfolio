import React from 'react'

const Add = () => {
  return (
    <div className='mt-[40px] flex flex-col justify-center items-center'>
        <div>
            <h1 className='text-white text-2xl font-semibold text-center p-3'>Additional Skills</h1>
            
            <div className='max-w-[800px] flex flex-wrap gap-5 text-center justify-center mt-4'>
                <span className='text-white border border-neutral-700 rounded-full px-2 py-2 hover:bg-purple-500 hover:text-black'>Responsive design</span>
                <span className='text-white border border-neutral-700 rounded-full px-2 py-2 hover:bg-purple-500 hover:text-black'>Performance Optimization</span>
                <span className='text-white border border-neutral-700 rounded-full px-2 py-2 hover:bg-purple-500 hover:text-black'>Accessibility</span>
                <span className='text-white border border-neutral-700 rounded-full px-2 py-2 hover:bg-purple-500 hover:text-black'>Problem Solving</span>
                <span className='text-white border border-neutral-700 rounded-full px-2 py-2 hover:bg-purple-500 hover:text-black'>SQL</span>
                <span className='text-white border border-neutral-700 rounded-full px-2 py-2 hover:bg-purple-500 hover:text-black'>Power BI</span>
                <span className='text-white border border-neutral-700 rounded-full px-2 py-2 hover:bg-purple-500 hover:text-black'>Decision Making</span>
                <span className='text-white border border-neutral-700 rounded-full px-2 py-2 hover:bg-purple-500 hover:text-black'>Team Collaboration</span>
            </div>
        </div>
    </div>
  )
}

export default Add