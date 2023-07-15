import Image from 'next/image'
import React from 'react'
// import about1 from '../../../public/images/banner/banner1.jpg'
import cardlist from '../pages/teamData'


function About() {
  return (
    <div className=''>
      <title>About Us</title>
      <div>
      <p className='text-5xl text-center'>Team</p>
      <div className='w-11/12 px-40 text-lg '>
        {cardlist.map(card => (
          <div className='flex items-center justify-between gap-4 text-justify py-2 flex-none'>
            <div className='p-2'>
            <h1> <>Name:</> {card.name}</h1>
            <p> Position: {card.description}</p>
            <p>Category: {card.type}</p>
            <p>{card.quantity}</p>
            </div>
            <Image className='rounded-xl py-10' src={card.img} width={300} height={300} alt='noimage'></Image>
            </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default About