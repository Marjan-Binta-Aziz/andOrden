import React from 'react'
import cardlist from '../../pages/teamData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'


function Team() {
  return (
    <div className=''>
      <title>Team</title>
      <div>
      <div className="container my-2 mx-auto md:px-6">
  <section className="mb-32 text-center">
    <h2 className="mb-12 text-3xl font-bold">
      Meet the <i className="text-primary dark:text-primary-400">Team</i>
    </h2>

    <div className="grid gap-x-10 md:grid-cols-3 lg:gap-x-12 md:mx-40 content-center">
    {cardlist.map(card => (
      <div className="mb-6 lg:mb-0">
        <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgb(0, 0, 0),0_10px_20px_-2px_rgba(0, 0, 0, 0.04)] dark:bg-neutral-700">
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.jpg" className=" rounded-full" 
            />
            <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
            </a>
          </div>
          <div className="p-6">
            <h5 className="text-lg font-bold">{card.name}</h5>
            <p className=" text-sm"> {card.type} | {card.position}</p>
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

export default Team