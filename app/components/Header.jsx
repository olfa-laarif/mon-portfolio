import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='  text-center mx-auto h-screen flex flex-col items-center justify-center gap-3' style={{
    background: 'linear-gradient(135deg, #f0f8ff, #f6fff8)', // dégradé très clair bleu/vert
  }} >
       <h3 className='text-xl md:text-2xl mb-3 font-Ovo' >Olfa LAARIF</h3>
       <h1 className='text-2xl sm:text-4xl lg:text-[44px] font-Ovo mb-3 bg-gradient-to-r from-[#1e4d91] to-[#a8d5a2] bg-clip-text text-transparent'>
       Développeuse Web Fullstack </h1>
       <p className='max-w-2xl mx-auto font-Ovo text-left' >
       Passionnée par le développement web, un domaine qui allie créativité et expertise technique, 
       je suis récemment diplômée du Titre Professionnel Développeur Web et Web Mobile.
       <br/><br/>Je suis à la recherche d’une opportunité (Stage, Alternance, CDD ou CDI) pour mettre mes 
       compétences en pratique et contribuer à des projets concrets et innovants.
       </p>
       <div className='flex flex-col sm:flex-row items-center gap-8 mt-4'>
         <a href='#contact' className='px-10 py-3 border border-white rounded-full
         bg-gradient-to-r from-[#1e4d91] to-[#a8d5a2] text-white flex items-center gap-2'>contact <Image src={assets.rightArrowWhite} 
         alt='' className='w-4'/></a>
         <a href='/olfa_LAARIF_CV.pdf' download className='px-10 py-3 border rounded-full
         border-gray-500 flex items-center gap-2'>mon cv <Image src={assets.downloadIcon} 
         alt='' className='w-4'/></a>
       </div>


    </div>
   
  )
}

export default Header
