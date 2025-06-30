'use client';

import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useRef } from 'react'

const Navbar = () => {

  const sideMenuRef=useRef();

  const openMenu=()=>{
    sideMenuRef.current.style.transform='translateX(-16rem)';
  }
  const closeMenu=()=>{
    sideMenuRef.current.style.transform='translateX(16rem)';
  }
  
  return (
   <>

   <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50'>
    <a href='#Top'><Image src={assets.logo} alt="Logo"   height={112} width={112} 
    className='rounded-full object-cover cursor-pointer p-2 mr-14'  priority/></a>
    <ul className='hidden md:flex item-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-slate-300 
    shadow-sm bg-opacity-30'>
        <li><a className='font-Ovo' href='#Top'>Acceuil</a></li>
        <li><a className='font-Ovo' href='#about'>À propos</a></li>
        <li><a className='font-Ovo' href='#skills'>Compétences</a></li>
        <li><a className='font-Ovo' href='#projects'>Projets</a></li>
        <li><a className='font-Ovo' href='#contact'>Contact</a></li>
    </ul>
    <div className='flex items-center gap-4'>
    
      <button>
        <Image src={assets.moonIcon} alt='menu' className='w-6'/>
      </button>
      <a className='hidden lg:flex items-center gap-3 px-10 
       py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo' href="#contact"> Contact 
       <Image src={assets.arrowIcon} alt="arrowIcon" width={12}/>
      </a>
      <button className='block md:hidden ml-3'>
        <Image src={assets.menuBlack} onClick={openMenu} alt='menu' className='w-6'/>
      </button>
    </div>

    {/*mobile menu*/}
    <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen
     bg-emerald-50 transition duration-500'>
      <div className='absolute right-6 top-6' onClick={closeMenu}>
       <Image src={assets.closeBlack} alt='menu' className='w-5 cursor-pointer'/>
      </div>
      <li><a className='font-Ovo' onClick={closeMenu} href='#Top'>Acceuil</a></li>
      <li><a className='font-Ovo' onClick={closeMenu} href='#about'>À propos</a></li>
      <li><a className='font-Ovo' onClick={closeMenu} href='#skills'>Compétences</a></li>
      <li><a className='font-Ovo' onClick={closeMenu} href='#projects'>Projets</a></li>
      <li><a className='font-Ovo' onClick={closeMenu} href='#contact'>Contact</a></li>
    </ul>
   </nav>
   </>
  )
}

export default Navbar
