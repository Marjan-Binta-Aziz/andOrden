'use client';
import React from 'react';
import projects from '../data/projectData';
import {AnimatePresence} from 'framer-motion';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTypo3} from '@fortawesome/free-brands-svg-icons';
import {faCalendarDays, faLocationDot} from '@fortawesome/free-solid-svg-icons';

function Projects() {
  return (
    <AnimatePresence>
      <div className="container mx-auto md:px-6 px-20">
      <h2 class="mb-12 text-center text-3xl font-bold">Projects</h2>
        {projects.map((project) => {
          if (project.id % 2 == 0) {
            console.log(project.id);
            return (
              <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                <div className="mb-6 md:order-2 md:mb-0">
                  <div className="block mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20">
                    <a href="../singleProject">
                    <img src={project.img} className="w-full overflow-hidden bg-cover bg-no-repeat transition duration-300 ease-in-out hover:opacity-75 bg-[hsla(0,0%,98.4%,.15)]" alt="Louvre" />
                    </a>
                  </div>
                </div>

                <div className="md:order-1">
                  <h3 className="mb-3 text-2xl font-bold uppercase">{project.name}</h3>
                  <div className="flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 md:justify-start">
                    <FontAwesomeIcon icon={faTypo3} className="h-4 mr-2" />
                    {project.type}
                  </div>
                  {/* location & year div */}
                  <div className="flex items-center justify-center text-sm font-medium md:justify-start">
                    <FontAwesomeIcon icon={faLocationDot} className="mr-2 h-4 " />
                    <p className="text-neutral-400 dark:text-neutral-300">{project.location}</p>
                  </div>
                  <p className=" text-neutral-400 dark:text-neutral-300">
                    <FontAwesomeIcon icon={faCalendarDays} className="mr-2 h-4 inline-flex" />
                    <small>
                      Year <u>{project.year}</u> by
                      <a href="#!"> and Orden</a>
                    </small>
                  </p>
                  <p className="text-neutral-500 dark:text-neutral-300">{project.description}</p>
                </div>
              </div>
            );
          } else {
            return (
              <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                <div className="mb-6 md:mb-0">
                  <div className="block mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20">
                    <a href="../singleProject">
                    <img src={project.img} className="w-full overflow-hidden bg-cover bg-no-repeat transition duration-300 ease-in-out hover:opacity-75 bg-[hsla(0,0%,98.4%,.15)]" alt="Louvre" />
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-2xl font-bold uppercase">{project.name}</h3>
                  <div className="flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 md:justify-start">
                    <FontAwesomeIcon icon={faTypo3} className="h-4 mr-2" />
                    {project.type}
                  </div>
                  {/* location & year div */}
                  <div className="flex items-center justify-center text-sm font-medium md:justify-start">
                    <FontAwesomeIcon icon={faLocationDot} className="mr-2 h-4 " />
                    <p className="text-neutral-400 dark:text-neutral-300">{project.location}</p>
                  </div>
                  <p className=" text-neutral-400 dark:text-neutral-300">
                    <FontAwesomeIcon icon={faCalendarDays} className="mr-2 h-4 inline-flex" />
                    <small>
                      Year <u>{project.year}</u> by
                      <a href="#!"> and Orden</a>
                    </small>
                  </p>
                  <p className="text-neutral-500 dark:text-neutral-300">{project.description}</p>
                </div>
              </div>
            );
          }
        })}
      </div>
    </AnimatePresence>
  );
}

export default Projects;
