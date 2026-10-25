import React, { useState } from 'react'
import iconflower from '../assets/iconflower.png'
import {
    FaHtml5, FaCss3Alt, FaJs, FaPython, FaJava,
    FaGitAlt, FaGithub, FaReact, FaPhp, FaGamepad,
    FaCode, FaPalette, FaPuzzlePiece, FaServer, FaVuejs
} from 'react-icons/fa'
import {
    SiTailwindcss, SiMysql, SiCplusplus, SiUnity, SiBlender, SiNextdotjs
} from 'react-icons/si'

const Skills = () => {
    const [activeTab, setActiveTab] = useState('All')

    const tabs = ['All', 'Languages', 'Frameworks', 'Tools & Multimedia']

    const skills = [
        { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', category: 'Languages'},
        { name: 'HTML', icon: FaHtml5, color: '#E34F26', category: 'Languages'},
        { name: 'CSS', icon: FaCss3Alt, color: '#1572B6', category: 'Languages'},
        { name: 'PHP', icon: FaPhp, color: '#8892BF', category: 'Languages'},
        { name: 'MySQL', icon: SiMysql, color: '#4479A1', category: 'Languages'},
        { name: 'Python', icon: FaPython, color: '#3776AB', category: 'Languages'},
        { name: 'C++', icon: SiCplusplus, color: '#00599C', category: 'Languages'},
        { name: 'C#', icon: FaCode, color: '#A179DC', category: 'Languages'},
        { name: 'Java', icon: FaJava, color: '#ED8B00', category: 'Languages'},
        { name: 'React', icon: FaReact, color: '#61DAFB', category: 'Frameworks'},
        { name: 'Vue.js', icon: FaVuejs, color: '#42B883', category: 'Frameworks'},
        { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff', category: 'Frameworks'},
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', category: 'Frameworks'},
        { name: 'Unity', icon: SiUnity, color: '#ffffff', category: 'Tools & Multimedia'},
        { name: 'Blender', icon: SiBlender, color: '#F5792A', category: 'Tools & Multimedia'},
        { name: 'Canva', icon: FaPalette, color: '#00C4CC', category: 'Tools & Multimedia'},
        { name: 'Construct 2', icon: FaGamepad, color: '#F472B6', category: 'Tools & Multimedia'},
        { name: 'Scratch', icon: FaPuzzlePiece, color: '#FF9D00', category: 'Tools & Multimedia'},
        { name: 'Git', icon: FaGitAlt, color: '#F05032', category: 'Tools & Multimedia'},
        { name: 'GitHub', icon: FaGithub, color: '#ffffff', category: 'Tools & Multimedia'},
        { name: 'VS Code', icon: FaCode, color: '#007ACC', category: 'Tools & Multimedia'},
        { name: 'XAMPP', icon: FaServer, color: '#FB7A24', category: 'Tools & Multimedia'},
    ]

    const visible = activeTab === 'All'
        ? skills
        : skills.filter((s) => s.category === activeTab)

  return (
    <section id='skills' className='py-20 px-6 overflow-hidden font-mono'>
        <div className='max-w-5xl mx-auto'>
            <div data-aos='fade-up' data-aos-duration='800'
            className='text-center mb-10'>
                <div className='flex items-center justify-center gap-3 mb-4'>
                    <img src={iconflower} alt="flower" className='w-10 h-10'/>
                    <h2 className='text-3xl md:text-5xl font-extrabold
                    bg-linear-to-r from-pink-400 to-rose-400
                    bg-clip-text text-transparent'>
                        My Skills
                    </h2>
                    <img src={iconflower} alt="flower" className='w-10 h-10'/>
                </div>
                <p className='text-gray-300'>Tools I regularly use</p>
            </div>

            {/* Filter tabs */}
            <div data-aos='fade-up' data-aos-delay='100' data-aos-duration='700'
            className='flex flex-wrap justify-center gap-3 mb-10'>
                {tabs.map((tab) => (
                    <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-5 py-2 text-sm font-semibold rounded-full
                    border transition-all duration-300 ${
                        activeTab === tab
                        ? 'bg-linear-to-r from-pink-500 to-rose-500 text-white border-transparent shadow-[0_0_20px_rgba(236,72,153,0.5)]'
                        : 'bg-white/5 text-pink-300 border-pink-400/30 hover:bg-pink-500/20'
                    }`}>
                        {tab}
                    </button>
                ))}
            </div>

            {/* Skill badges */}
            <div data-aos='fade-up' data-aos-delay='200' data-aos-duration='700'
            className='flex flex-wrap justify-center gap-x-6 gap-y-8
            bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10
            p-8 sm:p-10'>
                {visible.map((skill) => {
                    const Icon = skill.icon
                    return (
                        <div
                        key={skill.name}
                        className='group flex flex-col items-center gap-3 w-20 sm:w-24'>
                            <div className='w-16 h-16 sm:w-20 sm:h-20 rounded-full
                            flex items-center justify-center bg-white/5
                            border border-white/10
                            group-hover:border-pink-500/60
                            group-hover:shadow-[0_0_25px_rgba(236,72,153,0.5)]
                            group-hover:-translate-y-2
                            transition-all duration-300'>
                                <Icon
                                className='w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110
                                transition-transform duration-300'
                                style={{ color: skill.color }} />
                            </div>
                            <span className='text-xs sm:text-sm text-gray-300
                            text-center leading-tight
                            group-hover:text-white transition-colors'>
                                {skill.name}
                            </span>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Skills