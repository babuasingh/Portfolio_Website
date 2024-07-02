import React from 'react'
import { ACHIEVEMENTS } from '../constants/index'
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion"

const Experience = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='my-20 text-center text-4xl'>ACHIEVEMENTS</motion.h2>
            <motion.div
             whileInView={{ opacity: 1, y: 0 }}
             initial={{ opacity: 0, y: 100 }}
             transition={{ duration: 1.5 }}
            >
                {ACHIEVEMENTS.map((experience, index) => {
                    return (
                        <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>

                            <div className="w-full max-w-xl lg:w-3/4 ">
                                <h6 className='mb-2  flex text-lg'>
                                    {experience.role} -   <span> < FaExternalLinkAlt onClick={() => window.location.href = [experience.company]} className='text-1xl text-green-500  ml-2' /></span>
                                </h6>
                            </div>
                        </div>
                    )
                })}
            </motion.div>
        </div>
    )
}

export default Experience
