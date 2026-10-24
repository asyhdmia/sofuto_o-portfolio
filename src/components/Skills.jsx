import React from 'react'
import iconflower from '../assets/iconflower.png'
import skillsImg from '../assets/skillsImg.jpeg'

const Skills = () => {
    const leftSkills = [
        { name: 'React.js', level: 90},
        { name: 'Vue.js', level: 85},
        { name: 'Tailwind CSS', level: 95},
    ]
    const rightSkills = [
        { name: 'Node.js', level: 85},
        { name: 'MongoDB', level: 78},
        { name: 'Git/Github', level: 88},
    ]
  return (
    <section id='skills' className='py-20 px-6 overflow-hidden font-mono'>
        <div className='max-w-6xl mx-auto'>
            <div data-aos='fade-up' data-aos-duration='800'
            className='text-center mb-12'>
                <div className='flex items-center justify-center gap-3 mb-4'>
                    <img src={iconflower} alt="flower" className='w-10 h-10'/>
                    <h2 className='text-3xl md:text-5xl font-extrabold
                    bg-linear-to-r from-pink-400 to-rose-400
                    bg-clip-text text-transparent'>
                        My Skills
                    </h2>
                    <img src={iconflower} alt="flower" className='w-10 h-10'/>
                </div>
                <p className='text-gray-300'>Technologies I work with</p>
            </div>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-6'>

                {/* leftSkills */}
                <div data-aos='fade-right' data-aos-duration='800'
                className='lg:w-1/3 w-full space-y-6'>
                    {leftSkills.map((skill, index) => (
                        <div
                        key={index}
                        data-aos='fade-up'
                        data-aos-delay={index * 100}
                        data-aos-duration='600'
                        className='bg-white/5 backdrop-blur-sm
                        rounded-2xl p-5 border border-white/10
                        hover:border-pink-500/50 transition hover:-translate-y-1'>
                            <div className='flex justify-between items-center mb-3'>
                                <span className='text-white font-bold text-lg'>
                                    {skill.name}
                                </span>
                                <span className='text-pink-400 font-bold'>
                                    {skill.level}%
                                </span>
                            </div>
                            <div className='w-full h-2 bg-white/10 rounded-full
                            overflow-hidden'>
                                <div className='h-full bg-linear-to-r from-pink-500
                                to-rose-500 rounded-full'
                                style={{ width: `${skill.level}%`}}>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Image */}
                <div data-aos='zoom-in' data-aos-duration='1000'
                className='lg:w-60 lg:h-80 w-full'>
                    <img src={skillsImg} alt="Skills"
                    className='w-full object-contain
                    drop-shadow-[0_0_20px_rgba(255,0,128,0.8)]' />
                </div>

                {/* Right Skills */}
                <div data-aos='fade-right' data-aos-duration='800'
                className='lg:w-1/3 w-full space-y-6'>
                    {rightSkills.map((skill, index) => (
                        <div
                        key={index}
                        data-aos='fade-up'
                        data-aos-delay={index * 100}
                        data-aos-duration='600'
                        className='bg-white/5 backdrop-blur-sm
                        rounded-2xl p-5 border border-white/10
                        hover:border-pink-500/50 transition hover:-translate-y-1'>
                            <div className='flex justify-between items-center mb-3'>
                                <span className='text-white font-bold text-lg'>
                                    {skill.name}
                                </span>
                                <span className='text-pink-400 font-bold'>
                                    {skill.level}%
                                </span>
                            </div>
                            <div className='w-full h-2 bg-white/10 rounded-full
                            overflow-hidden'>
                                <div className='h-full bg-linear-to-r from-pink-500
                                to-rose-500 rounded-full'
                                style={{ width: `${skill.level}%`}}>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    </section>
  )
}

export default Skills