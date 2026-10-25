import React from 'react'
import iconflower from '../assets/iconflower.png'

const Experience = () => {
    const experiences = [
        {
            id: 1,
            date: 'March 2026 - July 2026',
            role: 'Data Governance and Privacy Intern',
            company: 'Sunway Services Sdn Bhd',
            points: [
                'Developed a Python script using Visual Studio Code to assess, score, and clean structured and unstructured datasets based on data quality dimensions.',
                'Validated data integrity, accuracy, completeness, and consistency across datasets.',
                'Applied data quality assessment techniques to support data governance and privacy initiatives.'
            ],
            tags: ['Python', 'Data Quality', 'Data Governance', 'Data Cleaning']
        },
        {
            id: 2,
            date: 'March 2023 - October 2023',
            role: 'Software Development Intern',
            company: 'East Automation & Engineering Sdn Bhd',
            points: [
                'Developed an Attendance and Project Management Records System (e-APMRs).',
                'Built using JavaScript and HTML, records staff attendance and tracks project progress.'
            ],
            tags: ['JavaScript', 'HTML', 'Web Development']
        },
        {
            id: 3,
            date: 'January 2020 - June 2020',
            role: 'Full-Time Barista',
            company: 'Chatime Malaysia Sdn Bhd',
            points: [
                'Managed point-of-sale operations, cash reconciliation, and order processing while maintaining customer service during peak hours.',
                'Monitored inventory, replenished stock, and completed daily store opening and closing procedures.'
            ],
            tags: ['Customer Service', 'Cash Handling', 'Inventory', 'Teamwork']
        },
    ]

  return (
    <section id='experience' className='py-20 px-6 font-mono overflow-hidden'>
        <div className='max-w-5xl mx-auto'>
            <div
            data-aos='fade-up'
            data-aos-duration='800'
            className='text-center mb-16'>
                <div className='flex items-center justify-center gap-3 mb-4'>
                    <img src={iconflower} alt="flower" className='w-10 h-10'/>
                    <h2 className='text-4xl md:text-5xl font-extrabold
                    bg-linear-to-r from-pink-400 to-rose-400
                    bg-clip-text text-transparent'>
                        Experience
                    </h2>
                    <img src={iconflower} alt="flower" className='w-10 h-10'/>
                </div>
                <p className='text-gray-300'>
                    Recent work and roles
                </p>
            </div>

            <div className='relative pl-10'>
                {/* Timeline line */}
                <div className='absolute left-[11px] top-0 bottom-0 w-0.5
                bg-linear-to-b from-pink-400 via-rose-400 to-transparent' />

                <div className='space-y-8'>
                    {experiences.map((exp, index) => (
                        <div
                        key={exp.id}
                        data-aos='fade-up'
                        data-aos-delay={index * 150}
                        data-aos-duration='700'
                        className='relative'>
                            {/* Timeline dot */}
                            <div className='absolute -left-10 top-7 w-6 h-6 rounded-full
                            border-2 border-pink-400 bg-gray-900 flex items-center
                            justify-center shadow-[0_0_12px_rgba(244,114,182,0.8)]'>
                                <div className='w-2 h-2 rounded-full bg-pink-400' />
                            </div>

                            {/* Card */}
                            <div className='bg-white/5 backdrop-blur-sm rounded-2xl
                            p-6 border border-white/10
                            hover:border-pink-500/50 hover:-translate-y-1
                            transition-all duration-300'>
                                <p className='text-pink-400 text-sm font-bold
                                uppercase tracking-widest mb-2'>
                                    {exp.date}
                                </p>
                                <h3 className='text-xl sm:text-2xl font-bold text-white mb-1'>
                                    {exp.role}
                                </h3>
                                <p className='text-pink-200 text-sm mb-4'>
                                    {exp.company}
                                </p>
                                <ul className='list-disc list-outside ml-5 space-y-1
                                text-gray-300 text-sm leading-relaxed mb-5'>
                                    {exp.points.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                                <div className='flex flex-wrap justify-center gap-2'>
                                    {exp.tags.map((tag, i) => (
                                        <span
                                        key={i}
                                        className='px-3 py-1 text-xs rounded-full
                                        bg-pink-500/20 text-pink-300 border
                                        border-pink-500/30'>
                                            {tag}
                                        </span>
                                    ))}
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

export default Experience