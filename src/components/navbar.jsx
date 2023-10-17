'use client';
import Link from 'next/link';
import React, {useState} from 'react';
import Logo from '../app/pages/logo';
import {useRouter} from 'next/navigation';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';
const CustomLink = ({href, title, className = ''}) => {
  //span by user
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative`}>
      {title}

      {/* for underline */}
      <span
        className={`h-[2px] inline-block bg-[#d2a50a] absolute left-0 -bottom-0.5 group-hover:w-full translate-[width] ease-out duration-300 ${
          router.push === href ? 'w-full' : 'w-0'
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" bg-dark w-full p-20 py-3 font-medium flex items-center justify-between">
      <div className='w-11'>
        <Logo />
      </div>
      <nav className="">
        <div>
          <CustomLink href="/" title="Home" className="mr-4" />

          {/* <CustomLink 
          href="about" title="About" className="mr-4" /> */}

          <div className="relative inline-block mr-4 ">
            <button onClick={() => setIsOpen((prev) => !prev)}>
              About
              <FontAwesomeIcon icon={faCaretDown} className="inline-flex h-4 w-4" />
            </button>
            {isOpen && (
              <div className="w-full">
                <ul className="absolute">
                  <div className="p-2 rounded-xl bg-dark">
                    <li>
                      <CustomLink href="/about/company" title="Company" className="block w-full">
                        Company
                      </CustomLink>
                    </li>
                    <li>
                      <CustomLink href="/about/team" title="Team" className="block w-full">
                        Team
                      </CustomLink>
                    </li>
                  </div>
                </ul>
              </div>
            )}
          </div>

          <CustomLink href="/projects" title="Projects" className="mr-4" />
          <CustomLink href="/blog" title="Blog" className="mr-4" />
        </div>
      </nav>
      <nav>
        <CustomLink href="" title="Contact Us" />
      </nav>
    </header>
  );
};

export default Navbar;
