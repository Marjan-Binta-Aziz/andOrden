import React from 'react'
import cardlist from '../pages/teamData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'


function About() {
  return (
    <div className=''>
      <title>About Us</title>
      <div>
      <div className="container my-2 mx-auto md:px-6">
  <section className="mb-32 text-center">
    <h2 className="mb-12 text-3xl font-bold">
      Meet the <i className="text-primary dark:text-primary-400">Team</i>
    </h2>

    <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
    {cardlist.map(card => (
      <div className="mb-6 lg:mb-0">
        <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgb(0, 0, 0),0_10px_20px_-2px_rgba(0, 0, 0, 0.04)] dark:bg-neutral-700">
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.jpg" className="w-full rounded-t-lg" />
            <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
            </a>
            <svg className="absolute dark:text-copper-700 left-0 bottom-0" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1140 320">
              <path fill="currentColor"
                d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
              </path>
            </svg>
          </div>
          <div className="p-6">
            <h5 className="text-lg font-bold">{card.name}</h5>
            <p className=" text-neutral-500 dark:text-neutral-300"> {card.position}</p>
            <ul className="mt-5 mx-auto flex list-inside justify-center">
              <a href="#!" className="px-2 w-10">
                {/* <!-- facebook --> */}
                <FontAwesomeIcon icon={faFacebook}/>
              </a>
              <a href="#!" className="px-2 w-10">
                {/* <!-- Linkedin --> */}
                <FontAwesomeIcon icon={faLinkedin}/>
              </a>
              <a href="#!" className="px-2 w-10">
                {/* <!-- Twitter --> */}
                <FontAwesomeIcon icon={faTwitter}/>
              </a>
            </ul>
          </div>
        </div>
      </div>
      ))}
    </div>
  </section>
</div>
      </div>
    </div>
  )
}

export default About