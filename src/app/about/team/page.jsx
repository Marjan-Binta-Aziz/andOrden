'use client';
import React from 'react';
import cardlist from '../../data/teamData';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {motion, AnimatePresence} from 'framer-motion';
import Image from 'next/image';

function Team() {
  return (
    <AnimatePresence>
      <div className="">
        <title>Team</title>
        <div>
          <div className="container my-2 mx-auto md:px-6">
            <section className="mb-32 text-center">
              <h2 className="mb-12 text-3xl font-bold">
                Meet the <i>Team</i>
              </h2>

              <div className="grid gap-x-10 md:grid-cols-4 lg:gap-x-12 md:mx-20 content-center">
                {cardlist.map((card) => (
                  <>
                    <div className="mb-6 lg:mb-0">
                      <div className="block rounded-lg" key={card.id}>
                        <div className="overflow-hidden bg-cover bg-no-repeat" key={card.id}>
                          <img className=" rounded-full" src={card.img} alt="NotFound" srcset="" />
                          {/* <Image src={card.img} className=" rounded-full" srcSet='notFound'width={100} height={100}/> */}
                        </div>
                        <div className="p-6">
                          <h5 className="text-lg font-bold">{card.name}</h5>
                          <p className=" text-sm">
                            {' '}
                            {card.type} | {card.position}
                          </p>
                          <ul className="mt-5 mx-auto flex list-inside justify-center">
                            <a href="#" className="px-2 w-10">
                              {/* <!-- facebook --> */}
                              <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="#" className="px-2 w-10">
                              {/* <!-- Linkedin --> */}
                              <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href="#" className="px-2 w-10">
                              {/* <!-- Twitter --> */}
                              <FontAwesomeIcon icon={faTwitter} />
                            </a>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}

export default Team;
