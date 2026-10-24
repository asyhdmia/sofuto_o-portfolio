import React, { useState } from 'react'
import iconflower from '../assets/iconflower.png'
import proj1 from '../assets/proj1.jpg'
import proj2 from '../assets/proj2.jpg'
import proj3 from '../assets/proj3.jpg'
import proj4 from '../assets/proj4.jpg'
import proj5 from '../assets/proj5.jpg'
import proj6 from '../assets/proj6.jpg'
import { ExternalLink, X } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

const Projects = () => {
    const [selected, setSelected] = useState(null)

    const projects = [
        {
            id: 1,
            title: 'AI Image Generator',
            tech: ["React", "OpenAI", "Tailwind"],
            image: proj1,
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing'
        },
        {
            id: 2,
            title: 'AI Image Generator',
            tech: ["React", "OpenAI", "Tailwind"],
            image: proj2,
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing'
        },
        {
            id: 3,
            title: 'AI Image Generator',
            tech: ["React", "OpenAI", "Tailwind"],
            image: proj3,
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing'
        },
        {
            id: 4,
            title: 'AI Image Generator',
            tech: ["React", "OpenAI", "Tailwind"],
            image: proj4,
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing'
        },
        {
            id: 5,
            title: 'AI Image Generator',
            tech: ["React", "OpenAI", "Tailwind"],
            image: proj5,
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing'
        },
        {
            id: 6,
            title: 'AI Image Generator',
            tech: ["React", "OpenAI", "Tailwind"],
            image: proj6,
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing'
        },
    ]

  return (
    <section id='projects' className='py-20 px-6 font-mono overflow-hidden'>
        <div className='max-w-6xl mx-auto'>
            <div
            data-aos='fade-up'
            data-aos-duration='800'
            className='text-center mb-16'>
                <div className='flex items-center justify-center gap-3 mb-4'>
                    <img src={iconflower} alt="flower" className='w-10 h-10'/>
                    <h2 className='text-4xl md:text-5xl font-extrabold
                    bg-linear-to-r from-pink-400 to-rose-400
                    bg-clip-text text-transparent'>
                        Projects
                    </h2>
                    <img src={iconflower} alt="flower" className='w-10 h-10'/>
                </div>
                <p className='text-gray-300'>
                    My latest work & projects
                </p>
            </div>

            <div
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {projects.map((project, index) => (
                    <div
                    key={project.id}
                    data-aos='fade-up'
                    data-aos-delay={index * 100}
                    data-aos-duration='700'
                    className='group bg-white/5 backdrop-blur-sm rounded-2xl
                    overflow-hidden border border-white/10
                    hover:border-pink-500/50 transition-all duration-300
                    hover:-translate-y-2 cursor-pointer'
                    onClick={() => setSelected(project)}>
                        <div className='overflow-hidden h-48'>
                            <img
                            src={project.image}
                            alt={project.title}
                            className='w-full h-full object-cover
                            group-hover:scale-110 transition-transform duration-500'/>
                        </div>
                        <div className='p-5'>
                            <h3 className='text-xl font-bold text-white mb-2'>
                                {project.title}
                            </h3>
                            <div className='flex flex-wrap gap-2 mb-3'>
                                {project.tech.slice(0, 2).map((t, i) => (
                                    <span
                                    key={i}
                                    className='px-2 py-1 text-xs rounded-full
                                    bg-pink-500/20 text-pink-300 border
                                    border-pink-500/30'>
                                        {t}
                                    </span>
                                ))}
                                {project.tech.length > 2 &&
                                <span className='px-2 py-1 text-xs text-gray-400'>
                                    +{project.tech.length - 2}
                                </span>}
                            </div>
                            <button className='text-sm text-pink-400
                            hover:text-pink-300 transition-colors
                            flex items-center gap-1'>
                                View Project
                                <ExternalLink className='w-3 h-3'/>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {selected && (
            <div
            className='fixed inset-0 bg-black/80
            backdrop-blur-md z-50 flex items-center justify-center p-4'
            onClick={() => setSelected(null)}>
                <div
                data-aos='zoom-in'
                data-aos-duration='300'
                className='bg-gray-800/95 rounded-2xl max-w-2xl
                w-full p-6 border border-pink-500/30'
                onClick={(e) => e.stopPropagation()}>
                    <button
                    onClick={() => setSelected(null)}
                    className='float-right mb-4 text-gray-400
                    hover:text-white'>
                        <X className='w-6 h-6'/>
                    </button>
                    <div className='clear-both'>
                        <img
                        src={selected.image}
                        alt={selected.title}
                        className='w-full h-64 object-cover rounded-lg mb-4'/>
                        <h3 className='text-2xl font-bold text-white mb-2'>
                            {selected.title}
                        </h3>
                        <p className='text-pink-400 mb-4'>
                            {selected.desc}
                        </p>
                        <div className='flex flex-wrap gap-2 mb-4'>
                            {selected.tech.map((t, i) => (
                                <span
                                key={i}
                                className='px-3 py-1 bg-pink-500/20
                                text-pink-300 rounded-full text-sm'>
                                    {t}
                                </span>
                            ))}
                        </div>
                        <div className='flex gap-3'>
                            <button className='flex-1 py-2 bg-pink-500
                            rounded-lg text-white font-semibold
                            hover:bg-pink-600 transition flex items-center
                            justify-center gap-2'>
                                <FaGithub className='w-4 h-4'/>
                                Code
                            </button>
                            <button className='flex-1 py-2 bg-rose-500
                            rounded-lg text-white font-semibold
                            hover:bg-rose-600 transition flex items-center
                            justify-center gap-2'>
                                <ExternalLink className='w-4 h-4'/>
                                Live Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </section>
  )
}

export default Projects