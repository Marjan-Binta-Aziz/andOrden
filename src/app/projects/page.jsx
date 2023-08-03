"use client"
import React from 'react'
import projects from '../pages/projectData'
import Image from 'next/image'
import { motion, AnimatePresence } from "framer-motion"

function Projects() {
  return (
  <AnimatePresence>
    <div>
            <div className='grid grid-cols-1 justify-items-center lg:grid-cols-2 md:grid-cols-1 pt-5 text-center'>
            {
            projects.map(project => <>
                <div className="lg:max-w-lg bg-base-100 shadow-xl h-full">
            <div className="card-body text-center">
            <figure className="px-10 pt-10">
                <img src={project.img} alt="projects"className="rounded-xl w-full h-56" />
            </figure>
            <div className='px-9 pt-4 text-xl'>
            <h2 className="text-center text-2xl font-bold font-serif">{project.name}</h2>
            <h2 className="text-center text-2xl font-extralight">Year: {project.year}</h2>
            
                <p className="text-left">Location: {project.location}</p>
            <p  className="text-left ">Type: {project.type}</p>
            <p  className="text-left text-sm">Details: {project.description}</p>
            </div>
            <div className="pt-4 justify-center">
            <a href='#' 
            className="border rounded-full p-3 hover:bg-copper hover:text-dark" >
                Show Details
            </a>
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