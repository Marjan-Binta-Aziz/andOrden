"use client"
import React from 'react'
import {motion} from "framer-motion";
import Link from 'next/link'
import Banner from './Banner'


function Hero() {
  
  return (
    <motion.div animate={{ y: 15 }}
    transition={{ ease: "easeOut", duration: 3 }} className="flex items-center justify-around w-full px-10 py-4">
      <div className="w-9/12">
      <Banner/>
      </div>
      <div className="w-full">
        <h1 className="text-bold text-5xl">
          and ORDEN
          <span className="!text-sm !text-end" >
            {' '}
            Collaborative Platform
          </span>
        </h1>
        <p>
          and ORDEN is a design studio of ARCHITECTURE, LANDSCAPE ARCHITECTURE & INTERIOR based company
        </p>
        <div className="flex items-center mt-3 gap-3">
          <Link
            href="#"
            className="bg-copper !text-dark p-2 px-4 rounded-lg font-semibold hover:translate-y-1"
          >
            {' '}
            Contact us
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default Hero