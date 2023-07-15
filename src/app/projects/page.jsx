"use client"
import React from 'react'
import projects from '../pages/projectData'
import Image from 'next/image'
import { motion, AnimatePresence } from "framer-motion"

function Projects() {
  return (
  <AnimatePresence>
    <div className='grid grid-cols-4 gap-4 text-justify px-10'>
      {projects.map(project => (
          <motion.div  
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key={project.id}>
            <Image className='rounded-3xl pt-5' src={project.img} width={300} height={300} alt='noImage'></Image>
            <div className='p-2'>
            <h1 className='font-mono'><b className='italic'>Name: </b> {project.name}</h1>
            <p className='font-mono'>Location: {project.location}</p>
            <p className='font-extralight'> Position: {project.description}</p>
            </div>
            </motion.div>
        ))}
    </div>
  </AnimatePresence>
  )
}

export default Projects