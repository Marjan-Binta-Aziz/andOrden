'use client';
import React from 'react';
import projects from '../pages/projectData';
import Image from 'next/image';
import {motion, AnimatePresence} from 'framer-motion';

function Projects() {
  return (
    <AnimatePresence>
      <div className="grid justify-items-center lg:grid-cols-3 gap-5 md:grid-cols-3 sm:grid-cols-1 px-10 py-4 text-center w-full">
        {projects.map((project) => (
          <>
            <div className="h-full">
              <div className="card-body text-center">
                <a href="../singleProject">
                  <img src={project.img} alt="projects" className="h-56 rounded-xl w-full" />
                </a>
                <div className="text-copper px-9 py-5">
                  <h2 className="text-center text-xl font-bold font-serif uppercase">{project.name}</h2>
                  <h2 className="text-center text-xl">Year: {project.year}</h2>

                  <p className="">Location: {project.location}</p>
                  <p className="">Type: {project.type}</p>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </AnimatePresence>
  );
}

export default Projects;
