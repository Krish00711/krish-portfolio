import React from 'react'

const Skills = () => {
  return (
    <div className='mt-[100px] flex flex-col justify-center items-center p-4'>
        <div>
            <h1 className='text-4xl font-bold text-white text-center p-3'>Skills & Technologies</h1>
            <p className='text-gray-400 text-lg text-center'>A comprehensive overview of my technical skills and proficiency levels</p>
        </div>

        <div className='mt-[100px] w-full max-w-6xl'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                
                <div className='bg-slate-900 border border-gray-700 rounded-lg p-6'>
                    <h2 className='text-2xl font-bold text-white mb-6 text-center'>Frontend Development</h2>
                    <div className='space-y-4'>
                        <div>
                            <div className='flex justify-between mb-1'>
                                <span className='text-base font-medium text-gray-300'>HTML/CSS</span>
                                <span className='text-sm font-medium text-gray-400'>90%</span>
                            </div>
                            <div className='w-full bg-gray-700 rounded-full h-2.5'>
                                <div className='bg-teal-400 h-2.5 rounded-full' style={{width: '90%'}}></div>
                            </div>
                        </div>
                        <div>
                            <div className='flex justify-between mb-1'>
                                <span className='text-base font-medium text-gray-300'>JavaScript</span>
                                <span className='text-sm font-medium text-gray-400'>85%</span>
                            </div>
                            <div className='w-full bg-gray-700 rounded-full h-2.5'>
                                <div className='bg-teal-400 h-2.5 rounded-full' style={{width: '85%'}}></div>
                            </div>
                        </div>
                        <div>
                            <div className='flex justify-between mb-1'>
                                <span className='text-base font-medium text-gray-300'>React</span>
                                <span className='text-sm font-medium text-gray-400'>80%</span>
                            </div>
                            <div className='w-full bg-gray-700 rounded-full h-2.5'>
                                <div className='bg-teal-400 h-2.5 rounded-full' style={{width: '80%'}}></div>
                            </div>
                        </div>
                        <div>
                            <div className='flex justify-between mb-1'>
                                <span className='text-base font-medium text-gray-300'>Tailwind CSS</span>
                                <span className='text-sm font-medium text-gray-400'>85%</span>
                            </div>
                            <div className='w-full bg-gray-700 rounded-full h-2.5'>
                                <div className='bg-teal-400 h-2.5 rounded-full' style={{width: '85%'}}></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-slate-900 border border-gray-700 rounded-lg p-6'>
                    <h2 className='text-2xl font-bold text-white mb-6 text-center'>AI & Machine Learning</h2>
                    <div className='space-y-4'>
                        <div>
                            <div className='flex justify-between mb-1'>
                                <span className='text-base font-medium text-gray-300'>Deep Learning</span>
                                <span className='text-sm font-medium text-gray-400'>75%</span>
                            </div>
                            <div className='w-full bg-gray-700 rounded-full h-2.5'>
                                <div className='bg-teal-400 h-2.5 rounded-full' style={{width: '75%'}}></div>
                            </div>
                        </div>
                        <div>
                            <div className='flex justify-between mb-1'>
                                <span className='text-base font-medium text-gray-300'>Machine Learning</span>
                                <span className='text-sm font-medium text-gray-400'>80%</span>
                            </div>
                            <div className='w-full bg-gray-700 rounded-full h-2.5'>
                                <div className='bg-teal-400 h-2.5 rounded-full' style={{width: '80%'}}></div>
                            </div>
                        </div>
                         <div>
                            <div className='flex justify-between mb-1'>
                                <span className='text-base font-medium text-gray-300'>NLP</span>
                                <span className='text-sm font-medium text-gray-400'>65%</span>
                            </div>
                            <div className='w-full bg-gray-700 rounded-full h-2.5'>
                                <div className='bg-teal-400 h-2.5 rounded-full' style={{width: '65%'}}></div>
                            </div>
                        </div>
                        <div>
                            <div className='flex justify-between mb-1'>
                                <span className='text-base font-medium text-gray-300'>Python</span>
                                <span className='text-sm font-medium text-gray-400'>90%</span>
                            </div>
                            <div className='w-full bg-gray-700 rounded-full h-2.5'>
                                <div className='bg-teal-400 h-2.5 rounded-full' style={{width: '90%'}}></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-slate-900 border border-gray-700 rounded-lg p-6'>
                    <h2 className='text-2xl font-bold text-white mb-6 text-center'>Business & Strategy</h2>
                    <div className='space-y-4'>
                        <div>
                            <div className='flex justify-between mb-1'>
                                <span className='text-base font-medium text-gray-300'>Lead Generation</span>
                                <span className='text-sm font-medium text-gray-400'>85%</span>
                            </div>
                            <div className='w-full bg-gray-700 rounded-full h-2.5'>
                                <div className='bg-teal-400 h-2.5 rounded-full' style={{width: '85%'}}></div>
                            </div>
                        </div>
                        <div>
                            <div className='flex justify-between mb-1'>
                                <span className='text-base font-medium text-gray-300'>Business Development</span>
                                <span className='text-sm font-medium text-gray-400'>75%</span>
                            </div>
                            <div className='w-full bg-gray-700 rounded-full h-2.5'>
                                <div className='bg-teal-400 h-2.5 rounded-full' style={{width: '75%'}}></div>
                            </div>
                        </div>
                         <div>
                            <div className='flex justify-between mb-1'>
                                <span className='text-base font-medium text-gray-300'>Client Communication</span>
                                <span className='text-sm font-medium text-gray-400'>90%</span>
                            </div>
                            <div className='w-full bg-gray-700 rounded-full h-2.5'>
                                <div className='bg-teal-400 h-2.5 rounded-full' style={{width: '90%'}}></div>
                            </div>
                        </div>
                         <div>
                            <div className='flex justify-between mb-1'>
                                <span className='text-base font-medium text-gray-300'>Product Strategy</span>
                                <span className='text-sm font-medium text-gray-400'>70%</span>
                            </div>
                            <div className='w-full bg-gray-700 rounded-full h-2.5'>
                                <div className='bg-teal-400 h-2.5 rounded-full' style={{width: '70%'}}></div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Skills

