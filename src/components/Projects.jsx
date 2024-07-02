import React from 'react'
import { PROJECTS } from '../constants'
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion"

const Projects = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h2
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.5 }}
                className='my-20 text-center text-4xl'> Projects</motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
            >
                {PROJECTS.map((project, index) => {
                    return (
                        <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>

                            <div className="w-full max-w-xl lg:w-3/4">
                                <h6 className='mb-2 text-3xl font-semibold flex'>{project.title} - <span className='ml-3 mt-1 text-green-500'><a href={project.Link} >< FaExternalLinkAlt /></a></span></h6>
                                <p className='mb-4 text-lg'>{project.description}</p>
                                {project.technologies.map((tech, index) => {
                                    return (
                                        <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>{tech}</span>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </motion.div>
        </div>
    )
}

export default Projects
