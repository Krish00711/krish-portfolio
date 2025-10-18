import React from 'react'

const Detail = () => {
  return (
    <div className='flex flex-col lg:flex-row w-full justify-around p-4'>

        <div className='mt-[100px] mx-auto'>
            <h2 className='text-white text-2xl text-center pb-4'>My Journey</h2>
            <p className='text-gray-400 max-w-[500px]'>I discovered my passion for web development during my studies and have been dedicated to mastering the craft ever since. What started as curiosity about how websites work has evolved into a deep appreciation for creating digital experiences that make a difference.</p>
            <br/>
            <p className='text-gray-400 max-w-[500px]'>I'm particularly drawn to the intersection of design and functionality, where beautiful interfaces meet robust backend systems. My goal is to join a dynamic team where I can contribute fresh perspectives while learning from experienced developers.</p>
            
            <div className='flex flex-wrap justify-center gap-3 mt-5'>
                <div className='bg-slate-800 text-purple-400 font-semibold px-4 py-2 rounded-lg border border-slate-700'>JavaScript</div>
                <div className='bg-slate-800 text-purple-400 font-semibold px-4 py-2 rounded-lg border border-slate-700'>React</div>
                <div className='bg-slate-800 text-purple-400 font-semibold px-4 py-2 rounded-lg border border-slate-700'>TailwindCSS</div>
                <div className='bg-slate-800 text-purple-400 font-semibold px-4 py-2 rounded-lg border border-slate-700'>ML</div>
                <div className='bg-slate-800 text-purple-400 font-semibold px-4 py-2 rounded-lg border border-slate-700'>DL</div>
            </div>
        </div>

        <div className='mt-[100px] w-full lg:w-1/2'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                    <h3 className="text-white text-xl font-bold">Clean Code</h3>
                    <p className="text-gray-400 mt-2">I write maintainable, well-documented code following best practices and industry standards.</p>
                </div>

                <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                    <h3 className="text-white text-xl font-bold">Responsive Design</h3>
                    <p className="text-gray-400 mt-2">My layouts work seamlessly on any device, from mobile phones to desktop screens.</p>
                </div>

                <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                    <h3 className="text-white text-xl font-bold">Problem Solving</h3>
                    <p className="text-gray-400 mt-2">I excel at breaking down complex problems into manageable solutions and debugging effectively.</p>
                </div>
                
                <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                    <h3 className="text-white text-xl font-bold">AI Integration</h3>
                    <p className="text-gray-400 mt-2">I have experience integrating machine learning models to build intelligent, data-driven features.</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Detail

