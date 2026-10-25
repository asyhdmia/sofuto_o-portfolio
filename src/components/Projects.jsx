import React, { useState } from 'react'
import iconflower from '../assets/iconflower.png'
import { ExternalLink, X, ArrowLeft, Info, Laptop, PlayCircle } from 'lucide-react'
// Add your own files here, then use them in the `media` lists below:
// import storytelling1 from '../assets/storytelling1.png'
// import storytellingVideo from '../assets/storytelling.mp4'

const Projects = () => {
    const [selected, setSelected] = useState(null)
    const [showDetails, setShowDetails] = useState(false)

    const closePopup = () => {
        setSelected(null)
        setShowDetails(false)
    }

    const projects = [
        {
            id: 1,
            title: 'Multisensory Digital Storytelling Platform',
            year: '20XX',
            tags: ['Unity', 'Interactive Narrative', 'Final Year Project'],
            tech: ['Unity', 'C#', 'PlayerPrefs'],
            features: [
                'Branching decision-making scenarios',
                'Local data persistence to track user progress and history logs',
                'Additive scene management for a seamless interactive experience'
            ],
            // Example media (uncomment the imports at the top first):
            // image: storytelling1,
            // media: [
            //     { type: 'image', src: storytelling1, caption: 'Branching scenario screen' },
            //     { type: 'video', src: storytellingVideo, caption: 'App walkthrough' },
            //     { type: 'youtube', src: 'https://www.youtube.com/embed/VIDEO_ID', caption: 'Demo video' },
            //     { type: 'demo', src: 'https://your-demo-link.com', caption: 'Try the live demo' },
            // ],
            desc: 'An interactive narrative platform developed in Unity and C# to enhance emotional literacy through branching decision-making scenarios. It uses PlayerPrefs for local data persistence to track user progress and history logs, and additive scene management to support a seamless interactive experience.'
        },
        {
            id: 2,
            title: 'Online Blood Bank System (OBBS)',
            year: '20XX',
            tags: ['Web App', 'Healthcare', 'Database'],
            tech: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
            features: [
                'Blood donor registration',
                'Blood distribution support',
                'Database-driven blood donation management'
            ],
            desc: 'A web-based system developed to support blood donor registration and blood distribution. It implements database-driven functionality to support blood donation management.'
        },
        {
            id: 3,
            title: 'FKA Lab Inventory System (FKALIS)',
            year: '20XX',
            tags: ['Web App', 'Inventory', 'Role-Based Login'],
            tech: ['MySQL', 'JavaScript', 'HTML', 'CSS'],
            features: [
                'Inventory system for the Faculty of Civil Engineering, UiTM Pahang',
                'Role-based login for developers, system administrators, moderators and laboratory assistants',
                'Manage and display database records'
            ],
            desc: 'A web-based inventory system developed for the Faculty of Civil Engineering at UiTM Pahang. It implements role-based login for developers, system administrators, moderators, and laboratory assistants to manage and display database records.'
        },
        {
            id: 4,
            title: 'Rescue at Dawn',
            year: '20XX',
            tags: ['Game', '2D', 'Unity'],
            tech: ['Unity', 'C#'],
            features: [
                '2D side-view platform adventure',
                'Magical medieval world setting',
                'Built with Unity'
            ],
            desc: 'A 2D side-view platform adventure game set in a magical medieval world, developed using Unity.'
        },
        {
            id: 5,
            title: 'Ngosek Dash',
            year: '20XX',
            tags: ['Game', '2D', 'Halloween'],
            tech: ['Construct 2'],
            features: [
                'Halloween-themed 2D side-scrolling gameplay',
                'Obstacle avoidance',
                'Candy collection'
            ],
            desc: 'A Halloween-themed 2D side-scrolling game featuring obstacle avoidance and candy collection, created using Construct 2.'
        },
        {
            id: 6,
            title: 'Math Bingo',
            year: '20XX',
            tags: ['Game', 'Education'],
            tech: ['HTML', 'PHP'],
            features: [
                'Interactive bingo-style gameplay',
                'Supports learning of basic mathematical operations',
                'Educational and user-friendly experience'
            ],
            desc: 'An educational game developed using HTML and PHP to support learning basic mathematical operations through interactive bingo-style gameplay.'
        },
        {
            id: 7,
            title: 'Attendance and Project Management Records System (e-APMRs)',
            year: '2023',
            tags: ['Web App', 'Internship', 'Records System'],
            tech: ['JavaScript', 'HTML'],
            features: [
                'Records staff attendance',
                'Tracks project progress',
                'Built during Software Development Internship at East Automation & Engineering Sdn Bhd'
            ],
            desc: 'A system developed during my Software Development Internship at East Automation & Engineering Sdn Bhd (March – October 2023). Built using JavaScript and HTML, it records staff attendance and tracks project progress.'
        },
        {
            id: 8,
            title: 'Data Quality Assessment Script',
            year: '2026',
            tags: ['Python', 'Internship', 'Data Governance'],
            tech: ['Python', 'Visual Studio Code'],
            features: [
                'Assesses, scores and cleans structured and unstructured datasets',
                'Validates data integrity, accuracy, completeness and consistency',
                'Supports data governance and privacy initiatives'
            ],
            desc: 'A Python script developed during my Data Governance and Privacy Internship at Sunway Services Sdn Bhd (March – July 2026) to assess, score, and clean structured and unstructured datasets based on data quality dimensions. It validates data integrity, accuracy, completeness, and consistency, applying data quality assessment techniques to support data governance and privacy initiatives.'
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
                    onClick={() => { setSelected(project); setShowDetails(false) }}>
                        <div className='overflow-hidden h-48'>
                            {project.image ? (
                                <img
                                src={project.image}
                                alt={project.title}
                                className='w-full h-full object-cover
                                group-hover:scale-110 transition-transform duration-500'/>
                            ) : (
                                <div className='w-full h-full flex items-center justify-center
                                bg-linear-to-br from-pink-500/20 to-rose-500/20
                                group-hover:scale-110 transition-transform duration-500'>
                                    <Laptop className='w-12 h-12 text-pink-300'/>
                                </div>
                            )}
                        </div>
                        <div className='p-5'>
                            <h3 className='text-xl font-bold text-white mb-2'>
                                {project.title}
                            </h3>
                            <div className='flex flex-wrap gap-2 mb-3'>
                                {project.tags.slice(0, 2).map((t, i) => (
                                    <span
                                    key={i}
                                    className='px-2 py-1 text-xs rounded-full
                                    bg-pink-500/20 text-pink-300 border
                                    border-pink-500/30'>
                                        {t}
                                    </span>
                                ))}
                                {project.tags.length > 2 &&
                                <span className='px-2 py-1 text-xs text-gray-400'>
                                    +{project.tags.length - 2}
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
            onClick={closePopup}>
                <div
                data-aos='zoom-in'
                data-aos-duration='300'
                className='bg-gray-800/95 rounded-2xl max-w-2xl
                w-full p-6 border border-pink-500/30
                max-h-[90vh] overflow-y-auto'
                onClick={(e) => e.stopPropagation()}>
                    <button
                    onClick={closePopup}
                    className='float-right mb-4 text-gray-400
                    hover:text-white'>
                        <X className='w-6 h-6'/>
                    </button>
                    <div className='clear-both'>
                        {!showDetails ? (
                            <>
                                {selected.image ? (
                                    <img
                                    src={selected.image}
                                    alt={selected.title}
                                    className='w-full h-64 object-cover rounded-lg mb-4'/>
                                ) : (
                                    <div className='w-full h-64 flex items-center justify-center
                                    rounded-lg mb-4 bg-linear-to-br
                                    from-pink-500/20 to-rose-500/20'>
                                        <Laptop className='w-16 h-16 text-pink-300'/>
                                    </div>
                                )}
                                <h3 className='text-2xl font-bold text-white mb-5'>
                                    {selected.title}
                                </h3>
                                <p className='text-pink-400 mb-6 line-clamp-3'>
                                    {selected.desc}
                                </p>
                                <div className='flex flex-wrap gap-2 mb-8'>
                                    {selected.tags.map((t, i) => (
                                        <span
                                        key={i}
                                        className='px-3 py-1 bg-pink-500/20
                                        text-pink-300 rounded-full text-sm'>
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <div className='flex gap-3'>
                                    <button
                                    onClick={() => setShowDetails(true)}
                                    className='flex-1 py-2 bg-rose-500
                                    rounded-lg text-white font-semibold
                                    hover:bg-rose-600 transition flex items-center
                                    justify-center gap-2'>
                                        <Info className='w-4 h-4'/>
                                        View Details
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <button
                                onClick={() => setShowDetails(false)}
                                className='text-sm text-pink-400 hover:text-pink-300
                                transition-colors flex items-center gap-1 mb-4'>
                                    <ArrowLeft className='w-4 h-4'/>
                                    Back
                                </button>
                                <h3 className='text-2xl font-bold text-white mb-2'>
                                    {selected.title}
                                </h3>
                                <p className='text-pink-300 text-sm mb-4'>
                                    {selected.year}
                                </p>
                                <div className='flex flex-wrap gap-2 mb-6'>
                                    {selected.tags.map((t, i) => (
                                        <span
                                        key={i}
                                        className='px-3 py-1 bg-pink-500/20
                                        text-pink-300 rounded-full text-sm'>
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <h4 className='text-lg font-bold text-pink-400 mb-2'>
                                    About This Project
                                </h4>
                                <p className='text-gray-300 text-sm leading-relaxed mb-6'>
                                    {selected.desc}
                                </p>
                                <h4 className='text-lg font-bold text-pink-400 mb-2'>
                                    Technologies Used
                                </h4>
                                <div className='flex flex-wrap gap-2 mb-6'>
                                    {selected.tech.map((t, i) => (
                                        <span
                                        key={i}
                                        className='px-3 py-1 bg-white/10 border
                                        border-white/10 text-gray-200 rounded-full text-sm'>
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <h4 className='text-lg font-bold text-pink-400 mb-2'>
                                    Key Features
                                </h4>
                                <ul className='list-disc list-inside space-y-1
                                text-gray-300 text-sm'>
                                    {selected.features.map((f, i) => (
                                        <li key={i}>{f}</li>
                                    ))}
                                </ul>
                                {selected.media && selected.media.length > 0 && (
                                    <>
                                        <h4 className='text-lg font-bold text-pink-400 mt-6 mb-3'>
                                            Gallery & Demos
                                        </h4>
                                        <div className='space-y-4'>
                                            {selected.media.map((m, i) => (
                                                <div key={i}>
                                                    {m.type === 'image' && (
                                                        <img src={m.src} alt={m.caption || selected.title}
                                                        className='w-full rounded-lg object-contain bg-black/20' />
                                                    )}
                                                    {m.type === 'video' && (
                                                        <video src={m.src} controls
                                                        className='w-full rounded-lg bg-black' />
                                                    )}
                                                    {m.type === 'youtube' && (
                                                        <iframe src={m.src} title={m.caption || selected.title}
                                                        allowFullScreen
                                                        className='w-full aspect-video rounded-lg' />
                                                    )}
                                                    {m.type === 'demo' && (
                                                        <a href={m.src} target='_blank' rel='noreferrer'
                                                        className='py-2 px-4 bg-rose-500 hover:bg-rose-600 transition
                                                        rounded-lg text-white font-semibold inline-flex items-center gap-2'>
                                                            <PlayCircle className='w-4 h-4' />
                                                            {m.caption || 'Live Demo'}
                                                        </a>
                                                    )}
                                                    {m.caption && m.type !== 'demo' && (
                                                        <p className='text-gray-400 text-xs mt-1 text-center'>
                                                            {m.caption}
                                                        </p>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        )}
    </section>
  )
}

export default Projects
