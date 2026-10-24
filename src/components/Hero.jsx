import React, { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Download as DownloadIcon } from 'lucide-react'
import iconflower from '../assets/iconflower.png'
import Resume from '../assets/resume.pdf'
import me from '../assets/me.png'
import TechStackBar from './TechStackBar'

const Hero = () => {
    const [text, setText] = useState('')
    const [index, setIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    const words = ["I'm a Fresh Graduate", "I specialize in Multimedia Computing"]
    const typingSpeed = 100
    const deletingSpeed = 50
    const pauseTime = 2000

    useEffect(() => {
        const currentWord = words[index]

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setText(currentWord.substring(0, text.length + 1))
                
                if (text.length + 1 === currentWord.length){
                    setTimeout(() => setIsDeleting(true), pauseTime)
                }
            } else {
                setText(currentWord.substring(0, text.length - 1))

                if (text.length - 1 === 0) {
                    setIsDeleting(false)
                    setIndex((prev) => (prev + 1) % words.length)
                }
            }
        }, isDeleting ? deletingSpeed : typingSpeed)
        return () => clearTimeout(timeout)
    }, [text, isDeleting, index, words])

    const socialIcons = [
        { icon: FaGithub, alt: 'GitHub', color: "#333333", url: 'https://github.com/asyhdmia'},
        { icon: FaLinkedin, alt: 'LinkedIn', color: "#0077B5", url: 'https://www.linkedin.com/in/nur-aisyah-damia'},
    ]
  return (
    <div className='relative overflow-hidden min-h-screen flex flex-col'>
        <section id='home' data-aos='fade-up' data-aos-delay='250'
        className='body-font mt-6'>
            <div className='container mx-auto flex px-4 sm:px-8 lg:px-14
            py-12 lg:py-14 flex-col lg:flex-row items-center justify-between
            lg:mt-14 mt-14 overflow-hidden'>
                <div className='lg:w-1/2 w-full flex flex-col items-center
                lg:items-start text-center lg:text-left mb-12 lg:mb-0'>
                    <p className='title-font text-sm lg:text-lg mb-2
                    font-bold text-pink-200 font-mono'>
                        NUR AISYAH DAMIA
                    </p>
                    <div className='flex items-center gap-3 justify-center
                    lg:justify-start'>
                        <img src={iconflower} alt="flower" className='w-10 h-10' />
                        <h1 className='title-font text-2xl sm:text-4xl lg:text-5xl
                        mb-2 font-bold text-white font-mono'>
                            Hi, I'm Damia
                        </h1>
                        <img src={iconflower} alt="flower" className='w-10 h-10' />
                    </div>
                    <h2 className='text-2xl sm:text-3xl lg:text-4xl
                    mb-6 font-semibold font-mono'>
                        <span className='text-transparent bg-clip-text
                        bg-linear-to-r from-pink-400 to-rose-400'>
                            {text}
                        </span>
                        <span className='animate-pulse text-pink-400'>|</span>
                    </h2>
                    <p
                    className='mb-8 sm:mb-10 leading-relaxed max-w-md lg:max-w-lg
                    text-gray-300 font-mono'
                    data-aos='fade-up'
                    data-aos-delay='600'>
                        
                    </p>
                    <div className='w-full pt-2 sm:pt-4'>
                            <div
                            className='flex flex-col sm:flex-row justify-center
                            lg:justify-start items-center gap-4 sm:gap-6'
                            data-aos='fade-up'
                            data-aos-delay='700'>
                                <a href={Resume} download className='w-full sm:w-auto'>
                                    <button
                                    className='w-full sm:w-auto inline-flex items-center
                                    justify-center text-white bg-linear-to-r
                                    from-pink-500 to-rose-500 border-0 py-3 px-6 sm:px-8
                                    hover:shadow-[0_0_40px_rgb(236,72,153,0.7)] 
                                    rounded-full text-base sm:text-lg font-semibold
                                    transition-all duration-300 transform font-mono'>
                                        <DownloadIcon className='w-4 h-4 sm:w-5 sm:h-5 mr-2' />
                                        Download Resume
                                    </button>
                                </a>
                                <div className='flex gap-3 sm:gap-4'>
                                    {socialIcons.map((social, index) => {
                                        const Icon = social.icon
                                        return (
                                            <a
                                            key={index}
                                            href={social.url}
                                            target='_blank'
                                            rel='noreferrer'
                                            aria-label={social.alt}
                                            className='transform hover:scale-110
                                            transition-transform duration-300 cursor-pointer'>
                                                <div
                                                className='w-8 h-8 sm:w-9 sm:h-9 rounded-full
                                                shadow-md flex items-center justify-center 
                                                hover:shadow-lg transition-shadow'
                                                style={{ backgroundColor: social.color}}>
                                                    <Icon className='w-4 h-4 sm:w-5 sm:h-5
                                                     text-white'/>
                                                </div>
                                            </a>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                    className='lg:w-1/2 w-full max-w-md lg:max-w-lg mt-8 lg:mt-0
                    flex justify-center'
                    data-aos='fade-left'
                    data-aos-delay='400'>
                        <div className='relative w-64 sm:w-72 lg:w-96'>
                        <div className='relative aspect-square overflow-hidden rounded-full
                        shadow-[0_0_30px_rgba(255,0,128,0.8)]'>
                            <img src={me} alt="My Image" 
                            className='w-full h-full object-cover object-top transform
                            hover:scale-105 transition-transform duration-500'
                            />
                        </div>
                        </div>
                        </div>
                    </div>
                <div 
                className='absolute -top-20 -left-20 w-40 h-40 sm:w-64 sm:h-64
                bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl
                opacity-20 animate-pulse delay-1000 hidden sm:block'
                />
        </section>
        <TechStackBar />
        </div>
  )
}

export default Hero