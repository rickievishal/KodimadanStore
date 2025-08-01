import React from 'react'
import PageButton from './components/PageButton'
import { HiArrowLongRight } from "react-icons/hi2";
const Footer = () => {
  return (
    <div className='w-full py-[100px] bg-black text-white tracking-tighter'>
          <div className='max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-[20px]'>


            
          <div className='flex flex-wrap gap-[10px] justify-center items-center gap-y-1'>
          
          <p className='text-3xl  bg-clip-text text-center bg-gradient-to-b from-gray-50 via-gray-100 to-black inline-block text-transparent'>Visit</p>
          <p className='text-3xl  bg-clip-text text-center bg-gradient-to-b from-gray-50 via-gray-100 to-black inline-block text-transparent'>us</p>
          <p className='text-3xl  bg-clip-text text-center bg-gradient-to-b from-gray-50 via-gray-100 to-black inline-block text-transparent'>at</p>
          <p className='text-3xl  bg-clip-text text-center bg-gradient-to-b from-gray-50 via-gray-100 to-black inline-block text-transparent'>Kadayam-627415</p>

          </div>
          <PageButton className={"bg-white text-black flex justify-center items-center gap-[10px] text-2xl "}>
            Locate Us <HiArrowLongRight className='text-4xl '/>
          </PageButton>
          </div>
    </div>
  )
}

export default Footer
