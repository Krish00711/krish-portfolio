import React from 'react'
import { FiMail, FiMapPin } from 'react-icons/fi'

const End = () => {
  return (
    <div className='mt-[100px] flex flex-col justify-center items-center p-4'>
        <div>
            <h1 className='text-white font-bold text-3xl text-center'>Get In Touch</h1>
            <p className='text-gray-400 text-lg text-center max-w-2xl'>I'm always open to discussing new opportunities and interesting projects</p>
        </div>

        <div className='flex flex-col lg:flex-row items-start justify-center gap-12 mt-10'>
            <div className="left">
                <div className='flex flex-col gap-6 max-w-md'>
                    <h2 className='text-white font-semibold text-2xl text-center'>Let's Connect</h2>
                    <p className='text-gray-400 text-center'>I'm currently seeking internship opportunities where I can contribute to meaningful projects while learning from experienced developers. Whether you have a project in mind or just want to chat about web development, I'd love to hear from you!</p>
                </div>

                <div className='mt-7 flex flex-col gap-6'>
                    <div className="flex items-center gap-4">
                        <div className="bg-gray-800 border border-gray-700 p-4 rounded-lg">
                            <FiMail className="text-cyan-400" size={28} />
                        </div>
                        <div>
                            <h3 className="text-white font-semibold text-xl">Email</h3>
                            <a href="mailto:krishnasharmabcgp9@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                                krishnasharmabcgp9@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="bg-gray-800 border border-gray-700 p-4 rounded-lg">
                            <FiMapPin className="text-cyan-400" size={28} />
                        </div>
                        <div>
                            <h3 className="text-white font-semibold text-xl">Location</h3>
                            <p className="text-gray-400">VIT Chennai, TamilNadu</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="right">
                
            </div>
        </div>
    </div>
  )
}

export default End

