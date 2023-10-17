'use client'
import Link from 'next/link'
import React from 'react'
import logo  from "../../../public/images/logo/orden-ts.png";
import Image from 'next/image';
import {motion} from "framer-motion";

const MotionLink = motion(Link) ;
const Logo = () => {
  return (
    <motion.div
      animate={{
        scale: [1, 0, 1, 1, 1],
        rotate: [0, 0, 180, 180, 0],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 2
      }}
    className='flex items-center justify-center mt-2'>
    <Link href="/" className='block rounded-full'>
        <Image src={logo} alt="logo" srcSet="" />
    </Link>
    </motion.div>
  )
}

export default Logo