import React, { useState } from 'react'
import iconflower from '../assets/iconflower.png'
import { ExternalLink, X, ArrowLeft, Info, Laptop, PlayCircle } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
// Add your own files here, then use them in the `media` lists below:
// import arvolcano1 from '../assets/arvolcano1.png'
// import arvolcano2 from '../assets/arvolcano2.png'
// import arvolcanoVideo from '../assets/arvolcano.mp4'

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
            title: 'Research Ideation Canvas - GERIC',
            year: '20XX',
            tags: ['Web App', 'Internship', 'Collaboration'],
            tech: ['HTML', 'CSS', 'JavaScript'],
            features: [
                'Organizes research ideas using structured frameworks',
                'Collaborative ideation tools',
                'Visual canvas for mapping ideas'
            ],
            desc: 'An interactive web-based system collaboratively developed during my internship to organize and visualize research ideas using structured frameworks and collaborative ideation tools.'
        },
        {
            id: 2,
            title: 'GIMS - GERIC Integrated Management System',
            year: '20XX',
            tags: ['Web App', 'Internship', 'Management System'],
            tech: ['HTML', 'CSS', 'JavaScript'],
            features: [
                'Centralized data management',
                'Reporting for internal operations',
                'Administrative workflows in one platform'
            ],
            desc: 'A web-based management system developed during my internship to support GERIC’s internal operations by centralizing data management, reporting, and administrative workflows into a single integrated platform.'
        },
        {
            id: 3,
            title: 'AR Volcano',
            year: '20XX',
            tags: ['AR', 'Education', 'Final Year Project'],
            tech: ['Augmented Reality', '3D Modelling'],
            features: [
                '3D volcano model projected into the user’s environment',
                'Rotate, zoom and explore volcanic layers',
                'Eruption animations and interactive information panels'
            ],
            // Example media (uncomment the imports at the top first):
            // image: arvolcano1,
            // media: [
            //     { type: 'image', src: arvolcano1, caption: 'Volcano model in AR' },
            //     { type: 'image', src: arvolcano2, caption: 'Interactive information panel' },
            //     { type: 'video', src: arvolcanoVideo, caption: 'App walkthrough' },
            //     { type: 'youtube', src: 'https://www.youtube.com/embed/VIDEO_ID', caption: 'Demo video' },
            //     { type: 'demo', src: 'https://your-demo-link.com', caption: 'Try the live demo' },
            // ],
            desc: 'ARVolcano App was developed for my Final Year Project (FYP) with the goal of enhancing the learning experience in earth science education. The application uses augmented reality to project a 3D volcano model into the user’s environment, allowing them to rotate, zoom, and explore different volcanic layers. It also includes animations that simulate eruptions and interactive information panels to help users understand how volcanoes work.'
        },
        {
            id: 4,
            title: 'Jungle Paws Web Based System',
            year: '20XX',
            tags: ['Web App', 'Booking System'],
            tech: ['PHP', 'MySQL', 'HTML', 'CSS'],
            features: [
                'User account creation and profile update',
                'Browse available cat-care packages',
                'Automatically generated printable receipt'
            ],
            desc: 'Jungle Paws is a web-based booking system, designed specifically for managing reservations at a cat hotel. The system allows users to create an account, update their profile, and browse available cat-care packages before making a booking. Once a reservation is completed, the system automatically generates a printable receipt for record-keeping.'
        },
        {
            id: 5,
            title: 'Sign Language Detection App',
            year: '20XX',
            tags: ['AI', 'Machine Learning', 'Course Project'],
            tech: ['Machine Learning', 'AI Algorithms'],
            features: [
                'Detects sign language gestures',
                'Interprets gestures into meaning',
                'Built with machine learning techniques'
            ],
            desc: 'This application was developed as part of a course assignment to demonstrate the implementation of Artificial Intelligence (AI) algorithms through machine learning techniques for sign language gesture detection and interpretation.'
        },
        {
            id: 6,
            title: 'Math Bingo Game App',
            year: '20XX',
            tags: ['Game', 'Education'],
            tech: ['HTML', 'PHP'],
            features: [
                'Interactive bingo-style gameplay',
                'Reinforces basic arithmetic skills',
                'Fun and user-friendly experience'
            ],
            desc: 'An educational game application designed to make learning basic mathematics more engaging through interactive bingo-style gameplay. The app reinforces arithmetic skills while providing a fun and user-friendly experience.'
        },
        {
            id: 7,
            title: 'Blood Bank Hospital System',
            year: '20XX',
            tags: ['Web App', 'Healthcare', 'Database'],
            tech: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
            features: [
                'Tracks donor information',
                'Monitors blood stock levels',
                'Basic administrative workflows'
            ],
            desc: 'A web-based system designed to manage blood donation and inventory records for hospital use. The system supports efficient tracking of donor information, blood stock levels, and basic administrative workflows to improve data organization and accessibility.'
        },
        {
            id: 8,
            title: 'Froggy Forest - Game',
            year: '20XX',
            tags: ['Game', '2D'],
            tech: ['Game Development'],
            features: [
                'Forest-themed 2D environment',
                'Control a frog through obstacles and challenges',
                'Simple mechanics and enjoyable interaction'
            ],
            desc: 'A 2D casual game set in a forest environment, designed to provide a light and engaging gameplay experience. Players control a frog character to navigate obstacles and challenges, focusing on simple mechanics and enjoyable interaction.'
        },
        {
            id: 9,
            title: 'RoomCraft - Web Based',
            year: '20XX',
            tags: ['Web App', 'Design'],
            tech: ['HTML', 'CSS', 'JavaScript'],
            features: [
                'Interactive room layout design',
                'Space planning and interior arrangement',
                'Intuitive and user-friendly interface'
            ],
            desc: 'A web-based application that allows users to design and visualize room layouts interactively. The system helps users experiment with space planning and interior arrangements through an intuitive and user-friendly interface.'
        },
        {
            id: 10,
            title: 'Soil Monitoring System - ARDUINO',
            year: '20XX',
            tags: ['IoT', 'Hardware'],
            tech: ['Arduino', 'Soil Moisture Sensor'],
            features: [
                'Monitors soil moisture levels',
                'Collects sensor data in real time',
                'Supports plant care and agriculture decisions'
            ],
            desc: 'An IoT-based system developed using Arduino to monitor soil conditions such as moisture levels. The system collects sensor data in real time to support basic analysis and decision-making for plant care and agriculture use.'
        },
        {
            id: 11,
            title: 'Data Mining',
            year: '20XX',
            tags: ['Data', 'Course Project'],
            tech: ['WEKA'],
            features: [
                'Dataset preprocessing',
                'Pattern and insight extraction',
                'Interpretation of results for decision-making'
            ],
            desc: 'A course assignment that applied data mining techniques using WEKA to analyze datasets and extract meaningful patterns and insights. The project demonstrates the process of preprocessing, analyzing, and interpreting data for decision-making purposes.'
        },
        {
            id: 12,
            title: 'Scratch - Game',
            year: '20XX',
            tags: ['Game', 'Course Project'],
            tech: ['Scratch'],
            features: [
                'Programming logic and event handling',
                'Basic game design concepts',
                'Learning through play and creative problem-solving'
            ],
            desc: 'A simple interactive game developed using Scratch to demonstrate programming logic, event handling, and basic game design concepts. The project emphasizes learning through play and creative problem-solving.'
        },
        {
            id: 13,
            title: 'Audio Compression',
            year: '20XX',
            tags: ['Multimedia', 'Audio'],
            tech: ['Digital Signal Processing'],
            features: [
                'Reduces audio file size',
                'Maintains sound quality',
                'Analyzes and compresses audio data efficiently'
            ],
            desc: 'A project focused on reducing audio file sizes while maintaining sound quality. Techniques in digital signal processing were applied to analyze and compress audio data efficiently, demonstrating understanding of multimedia and data optimization concepts.'
        },
        {
            id: 14,
            title: 'Eon-XR - Meta Experience',
            year: '20XX',
            tags: ['XR', 'VR', 'Course Project'],
            tech: ['EON-XR'],
            features: [
                '3D and 360° content design',
                'Works across mobile and VR devices',
                'Immersive user experience'
            ],
            desc: 'An interactive XR experience created using the EON-XR application as part of a course assignment. The project allowed me to design engaging 3D and 360° content and explore immersive user experiences across mobile and VR devices.'
        },
        {
            id: 15,
            title: 'Blender Project',
            year: '20XX',
            tags: ['3D', 'Design'],
            tech: ['Blender'],
            features: [
                '3D object modeling',
                'Texturing',
                'Visualization and spatial design'
            ],
            desc: '3D objects modeled and designed using Blender to demonstrate proficiency in 3D modeling, texturing, and visualization. The project showcases creativity and understanding of spatial design principles.'
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
                                <h3 className='text-2xl font-bold text-white mb-2'>
                                    {selected.title}
                                </h3>
                                <p className='text-pink-400 mb-4 line-clamp-3'>
                                    {selected.desc}
                                </p>
                                <div className='flex flex-wrap gap-2 mb-4'>
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
                                    <button className='flex-1 py-2 bg-pink-500
                                    rounded-lg text-white font-semibold
                                    hover:bg-pink-600 transition flex items-center
                                    justify-center gap-2'>
                                        <FaGithub className='w-4 h-4'/>
                                        Code
                                    </button>
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