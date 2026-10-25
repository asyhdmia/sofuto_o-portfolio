import { Section } from 'lucide-react'
import React from 'react'
import iconflower from '../assets/iconflower.png'
import aboutImg from '../assets/aboutImg.png'

const About = () => {
  return (
    <section id='about' className='min-h-screen flex items-center
    justify-center p-4 sm:p-6 lg:p-12 relative overflow-hidden
    select-none'>
        <div className='container mx-auto flex flex-col lg:flex-row
        items-center justify-between gap-4 lg:gap-6 relative z-10'>

        <div 
        data-aos='fade-right'
        data-aos-duration='800'
        className='w-full lg:w-[30%] flex flex-col items-center
        lg:items-start text-center lg:text-left order-2 lg:order-1
        -mt-12 sm:-mt-16 lg:mt-0'>
            <p className='text-sm lg:text-lg mb-2 font-bold
            text-pink-200 font-mono tracking-widget uppercase'>
                Get to Know Me
            </p>
            <div className='flex items-center gap-2 sm:ap-3 mb-4'>
                <img src={iconflower} alt="flower"
                className='w-8 h-8 sm:w-10 sm:h-10 shrink-0' />
                <h2 className='text-2xl sm:text-4xl lg:text-5xl font-bold
                text-white font-mono whitespace-nowrap'>
                    About <span className='text-pink-400'>Me</span>
                </h2>
                <img src={iconflower} alt="flower"
                className='w-8 h-8 sm:w-10 sm:h-10 shrink-0' />
            </div>
            <p className='text-gray-300 leading-relaxed mb-4 max-w-md
            font-mono text-sm sm:text-base'>
                I’m passionate about web development, game design and data. I enjoy turning ideas into interactive digital experiences, and I’m always learning, building and improving.
            </p>
        </div>
        <div 
        data-aos='zoom-in' 
        data-aos-duration='1000'
        className='w-full lg:w-[50%] flex justify-center order-1
        lg:order-2 relative group'>
            <div className='absolute insert-0 mix-blend-screen filter
            blur-3xl opacity-20' />
                <img src={aboutImg} alt="About"
                className='w-4/5 sm:w-3/4 lg:w-[210%] lg:max-w-[75vw]
                h-auto object-contain
                drop-shadow-[0_0_40px_rgba(255,0,128,0.6)] transform
                group-hover:scale-103 transition-transform
                duration-500'/>
            </div>
            <div data-aos='fade-left'
        data-aos-duration='800'
        className='w-full lg:w-[30%] flex flex-col gap-4 sm:gap-6 
        order-3 max-w-md lg:max-w-none'>

            <div className='p-5 sm:p-6 rounded-2xl bg-white/5
            border border-white/10 backdrop-blur-md
            hover:border-pink-500/30 transition-all duration-300'>

                <h3 className='text-lg sm:text-xl font-bold text-pink-400
                font-mono mb-2'>
                    My Philosophy
                </h3>
                <p className='text-gray-300 font-mono text-xs sm:text-sm
                leading-relaxed'>
                    Technology should feel safe, intuitive and welcoming.
                </p>
            </div>

<div className='p-5 sm:p-6 rounded-2xl bg-white/5
            border border-white/10 backdrop-blur-md
            hover:border-pink-500/30 transition-all duration-300'>

                <h3 className='text-lg sm:text-xl font-bold text-pink-400
                font-mono mb-2'>
                    The Mission
                </h3>
                <p className='text-gray-300 font-mono text-xs sm:text-sm
                leading-relaxed'>
                    To keep growing as a developer and build engaging, functional digital products, from web systems to interactive games.
                </p>
            </div>
            </div>
        </div>
    </section>
  )
}

export default About
