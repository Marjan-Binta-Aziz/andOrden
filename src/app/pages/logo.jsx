'use client'
import Link from 'next/link'
import React from 'react'
import logo  from "../../../public/images/logo/orden-ts.png";
import Image from 'next/image';
// import {motion} from "framer-motion";

// const MotionLink = motion(Link) ;
const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
    <Link href="/" className='w-11 rounded-full'>
    {/* whileHover={{scale: 1.5}} */}
        <Image src={logo} alt="noi" srcSet="" />
    </Link>
    </div>
  )
}

export default Logo