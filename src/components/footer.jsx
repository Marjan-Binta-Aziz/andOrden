import React from 'react';
import logo from '../../public/images/logo/orden-ts.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import {faFacebookSquare, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="w-full flex items-center justify-center bg-black pt-7">
      <div className="w-full px-4   flex flex-col">
        <div className="flex flex-col">
          <div className="flex mt-10 mb-12 flex-row items-center justify-between">
            <div className="w-16">
              <Image src={logo} alt="logo" srcSet="" />
            </div>
            <a className="hidden md:block cursor-pointer   hover:text-white uppercase">About</a>
            <a className="hidden md:block cursor-pointer   hover:text-white uppercase">Services</a>
            <a className="hidden md:block cursor-pointer   hover:text-white uppercase">Why us</a>
            <a className="hidden md:block cursor-pointer   hover:text-white uppercase">Contact Us</a>
            <div className="flex flex-row space-x-8 items-center justify-between">
              <Link href="https://www.facebook.com/" target={'_blank'}>
                <FontAwesomeIcon className="w-14 h-8" icon={faFacebookSquare} />
              </Link>
              <Link href="https://www.instagram.com/?hl=en" target={'_blank'}>
                <FontAwesomeIcon className="w-14 h-8" icon={faInstagram} />
              </Link>
              <Link href="https://www.youtube.com/" target={'_blank'}>
                <FontAwesomeIcon className="w-14 h-8" icon={faYoutube} />
              </Link>
            </div>
          </div>
          <hr className="border-copper" />
          <p className="w-full text-center my-7  ">Copyright &copy; {year} ...and ORDEN</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
