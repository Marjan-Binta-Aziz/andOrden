'use client';
import Link from 'next/link';
import React, {useState} from 'react';
import Logo from '../app/pages/logo';
import {useRouter} from 'next/navigation';

const CustomLink = ({href, title, className = ''}) => {
  //span by user
  const router = useRouter();
  const asPath = router;
  // console.log(asPath);
  return (
    <Link href={href} className={`${className} relative group`}>
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
  const [currentMenu, setCurrentMenu] = useState('');
  const handleChange = (path) => {
    setCurrentMenu(path);
    console.log(path);

  };
  console.log(currentMenu);
  return (
    <header className="!text-[#d2a50a] w-full px-20 py-3 font-medium flex items-center justify-between">
      <div>
        <Logo />
      </div>
      <nav>
        <div>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="about" title="About Us" className="mr-4" />
          <CustomLink href="projects" onClick={() => handleChange('projects')} title="Projects" className="mr-4" />
          {/* <CustomLink onClick={() => handleChange('team')} title="Team" className="mr-4" />
          <CustomLink onClick={() => handleChange('blog')} title="Blog" className="mr-4" /> */}
        </div>

        <div>
          <CustomLink href="/" title="All" className="mr-4" />
          <CustomLink href="/religious" title="Religious" className="mr-4" />
          <CustomLink href="/others" title="Others" className="mr-4" />
        </div>
        
        <div>
          <CustomLink href="/" title="Desigens" className="mr-4" />
          <CustomLink href="/" title="3D modelers" className="mr-4" />
          <CustomLink href="/others" title="Others" className="mr-4" />
        </div>
      </nav>
      <nav>
        <CustomLink href="" title="Contact Us" />
      </nav>
    </header>
  );
};

export default Navbar;
