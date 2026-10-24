import React, { useState } from 'react'
import { Eye, X, ExternalLink } from 'lucide-react'
import iconflower from '../assets/iconflower.png'
import cert1 from '../assets/cert1.pdf'
import cert2 from '../assets/cert2.pdf'

const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState(null)

    const certificates = [
        {
            id: 1,
            title: "Fundamentals of Sustainability and Technology",
            issuer: "IBM SkillsBuild", 
            date: "2025",
            skills: ["Sustainability", "Technology"],
            file: cert1,

        },
          {
            id: 2,
            title: "Artificial Intelligence Fundamentals",
            issuer: "IBM SkillsBuild", 
            date: "2024",
            skills: ["AI", "Machine Learning"],
            file: cert2,
        }
    ]
  return (
    <section id='certificates' className='py-20 px-6 overflow-hidden'>
        <div className='max-w-6xl mx-auto'>
            <div
            data-aos='fade-up'
            data-aos-duration="800"
            className='text-center mb-16'
            >
                <div className='flex items-center justify-center gap-4 mb-4'>
                    <img 
                    src={iconflower} alt="flower" 
                    className='md:w-18 md:h-18 w-14 h-14 
                    drop-shadow-[0_0_10px_rgba(255,0,128,0)]' />
                    <h2 className='text-3xl lg:text-5xl font-bold bg-linear-to-r
                    from-pink-400 to-rose-400 font-mono 
                    bg-clip-text text-transparent'>
                        Certificates
                    </h2>
                    <img 
                    src={iconflower} alt="flower" 
                    className='md:w-18 md:h-18 w-14 h-14 
                    drop-shadow-[0_0_10px_rgba(255,0,128,0)]' />
                    </div>
                    <p className='text-gray-300 mt-4 font-mono'>
                        Professional Achievements & Certificates
                    </p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        {certificates.map((cert, index) => (
                            <div 
                            key={cert.id}
                            data-aos='fade-up'
                            data-aos-delay={index * 150}
                            data-aos-duration='800'
                            className='bg-white/5 backdrop-blur-sm
                            rounded-2xl overflow-hidden border border-white/10
                            hover:border-pink-500/50 transition-all duration-300
                            hover:-translate-y-2 cursor-pointer'
                            onClick={() => setSelectedCert(cert)}>
                                <div className='p-6 font-mono'>
                                    <div className='flex justify-between
                                    items-start gap-4 mb-4'>
                                        <div>
                                            <h3 className='text-xl font-bold text-white mb-4'>
                                                {cert.title}
                                            </h3>
                                            <p className='text-gray-400 text-sm'>
                                                {cert.issuer}
                                            </p>
                                        </div>
                                        <span className='text-2xl font-bold text-pink-400 shrink-0'>
                                            {cert.date}
                                        </span>
                                    </div>
                                    <div className='flex flex-wrap gap-2 mb-6'>
                                        {cert.skills.map((skill, i) => (
                                            <span key={i} className='px-3 py-1 text-xs rounded-full
                                            bg-pink-500/20 text-pink-300 border border-pink-500/30'>
                                                {skill}    
                                            </span>
                                        ))}
                                    </div>
                                    <button className='text-sm text-pink-400 
                                    hover:text-pink-300 transition-colors flex 
                                    items-center gap-2'>
                                        <Eye className='w-4 h-4' />
                                        View Certificate
                                    </button>
                                    </div>
                            </div>
                        ))}
            </div>
            {selectedCert && (
                <div 
                className='fixed inset-0 bg-black/80
                backdrop-blur-md z-50 flex items-center justify-center p-4'
                onClick={() => setSelectedCert(null)}>
                    <div data-aos='zoom-in' data-aos-duration='300'
                    className='bg-gray-800/95 rounded-2xl max-w-2xl
                    w-full p-6 border border-pink-500/30
                    max-h-[90vh] overflow-y-auto'
                    onClick={(e) => e.stopPropagation()}>
                        <button onClick={() => setSelectedCert(null)}
                            className='float-right text-gray-400
                            hover:text-white'>
                            <X className='w-6 h-6'/>
                        </button>
                        <div className='clear-both'>
                            <div className='flex items-center gap-2 mb-4'>
                                <img src={iconflower} alt="flower" 
                                className='w-8 h-8'/>
                                <h3 className='text-2xl font-bold text-white'>
                                    {selectedCert.title}
                                </h3>
                                </div>
                                <p className='text-pink-400 mb-4'>
                                    {selectedCert.issuer} - {selectedCert.title}
                                </p>
                                <div className='flex flex-wrap gap-2 mb-4'>
                                    {selectedCert.skills.map((skill, i) => (
                                        <span key={i}
                                        className='px-3 py-1 bg-pink-500/20
                                        text-pink-300 rounded-full text-sm'>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                                <iframe src={selectedCert.file}
                                title={selectedCert.title}
                                className='w-full h-[50vh] rounded-lg mt-4 bg-white' />
                                <a href={selectedCert.file} target='_blank'
                                rel='noreferrer'
                                className='mt-4 text-sm text-pink-400 hover:text-pink-300
                                transition-colors flex items-center justify-center gap-2'>
                                    <ExternalLink className='w-4 h-4' />
                                    Open in new tab
                                </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </section>
  )
}

export default Certificates