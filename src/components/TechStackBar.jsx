import React from 'react'
import { FaReact, FaVuejs } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si'

const TechStackBar = () => {
    const techStack = [
        { name: 'React JS', icon: FaReact, color: '#61DAFB'},
        { name: 'Vue JS', icon: FaVuejs, color: '#42B883'},
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4'},
        { name: 'Next JS', icon: SiNextdotjs, color: '#ffffff'},
    ]
  return (
    <div className='relative z-10 w-full overflow-hidden bg-linear-to-br
    from-gray-900 to-pink-700 backdrop-blur-sm border-y border-white/1
    py-4 md:py-5 lg:py-6 -mt-2 md:-mt-4 lg:-mt-6'>
        <div className='container mx-auto px-4 sm:px-6 md:px-8 lg:px-14'>
            <div className='flex flex-wrap justify-center items-center
            gap-4 sm:gap-6 md:gap-8 lg:gap-12'>
                {techStack.map((tech, index) => {
                    const Icon = tech.icon
                    return (
                        <div
                            key={index}
                            className='flex items-center gap-3 md:gap-4 lg:gap-8
                            group cursor-pointer'>
                                <div className='relative'>
                                    <div className='absolute inset-0
                                    rounded-full bg-white/20 blur-x1 group-hover:blur-2x1
                                    transition-all opacity-0 group-hover:opacity-100'>
                                        </div>
                                        <Icon
                                        className='w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8
                                        xl:w-10 xl:h-10 transition-all duration-300 group-hover:scale-110'
                                        style={{ color: tech.color}}/>
                                        </div>
                                        <span className='text-[11px] sm:text-xs
                                        md:text-sm font-mono text-gray-300 group-hover:text-white
                                        transition-colors whitespace-nowrap'>
                                            {tech.name}
                                        </span>
                                        {index < techStack.length - 1 && (
                                            <div
                                                className='w-px h-4 sm:h-5 md:h-6 bg-white/20 ml-1 sm:ml-2'
                                            >
                                                
                                            </div>
                                        )}
                                </div>
                    )
                })}

            </div>

        </div>

    </div>
  )
}

export default TechStackBar