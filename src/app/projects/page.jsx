"use client"
import React from 'react'
import projects from '../pages/projectData'
import Image from 'next/image'
import { motion, AnimatePresence } from "framer-motion"

function Projects() {
  return (
  <AnimatePresence>
    <div>
            <div className='grid grid-cols-1 justify-items-center lg:grid-cols-1 w-full md:grid-cols-1 pt-5 text-center'>
            {
            projects.map(project => <>
                <div className="w-[800px] h-full">
            <div className="card-body text-center">
            <a href="../singleProject">
            <figure className="px-10">
                <img src={project.img} alt="projects"className="rounded-xl w-full" />
            </figure>
            </a>
            <div className='text-copper px-9 py-5'>
            <h2 className="text-center text-2xl font-bold font-serif">{project.name}</h2>
            <h2 className="text-center text-2xl">Year: {project.year}</h2>
            
                <p className="">Location: {project.location}</p>
            <p className="">Type: {project.type}</p>
            </div>
            </div>
        </div>
            </>)}
        </div>
        </div>
  </AnimatePresence>
  )
}

export default Projects