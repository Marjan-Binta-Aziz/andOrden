'use client';
import React from 'react';
import projects from '../pages/projectData';
import { AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTypo3 } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


function Projects() {
  return (
    <AnimatePresence>
      <div className="container mx-auto md:px-6 p-20">
        {projects.map((project) => {
          if (((project.id) % 2 == 0)) {
            console.log(project.id);
            return (
              <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                <div className="mb-6 md:order-2 md:mb-0">
                  <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                  >
                    <img src={project.img} className="w-full" alt="Louvre" />
                    <a href="../singleProject">
                      <div
                        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                      </div>
                    </a>
                  </div>
                </div>

                <div className="md:order-1">
                  <h3 className="mb-3 text-2xl font-bold underline underline-offset-4">{project.name}</h3>
                  <div
                    className="mb-3 flex items-center justify-center text-sm font-medium text-primary dark:text-primary-400 md:justify-start">
                    <FontAwesomeIcon icon={faTypo3}/>
                    {project.type}
                  </div>
                  <p className="mb-3 text-neutral-400 dark:text-neutral-300">
                    <small>Year <u>{project.year}</u> by
                      <a href="#!"> and Orden</a></small>
                  </p>
                  <p className="text-neutral-400 dark:text-neutral-300">
                  <FontAwesomeIcon icon={faLocationDot} className='mr-1'/>
                  {project.location}
                  </p>
                  <p className="text-neutral-400 dark:text-neutral-300">
                  {project.description}
                  </p>
                </div>
              </div>
            )
          } else {
            return (
              <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
              <div className="mb-6 md:mb-0">
                <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20">
                  <img src={project.img} className="w-full" alt="Louvre" />
                  <a href="../singleProject">
                    <div
                      className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                    </div>
                  </a>
                </div>
              </div>
        
              <div>
                <h3 className="mb-3 text-2xl font-bold underline underline-offset-4">{project.name}</h3>
                <div
                  className="mb-3 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 md:justify-start">
                 <FontAwesomeIcon icon={faTypo3}/>
                  {project.type}
                </div>
                <p className="mb-6 text-neutral-400 dark:text-neutral-300">
                  <small>Year <u>{project.year}</u> by
                    <a href="#!"> and Orden</a></small>
                </p>
                <p className="text-neutral-400 dark:text-neutral-300">
                <FontAwesomeIcon icon={faLocationDot} className='mr-1'/>
                {project.location}
                </p>
                <p className="text-neutral-500 dark:text-neutral-300">
                {project.description}
                </p> <p className="text-neutral-500 dark:text-neutral-300">
                {project.description}
                </p>
              </div>
            </div>
            )
          }
        })}
      </div>
    </AnimatePresence>
  );
}

export default Projects;