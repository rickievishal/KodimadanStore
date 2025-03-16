"use client"
import React, { useState } from 'react'
import { IoMenuSharp } from 'react-icons/io5'
import PageButton from './components/PageButton'
import { HiArrowUpRight } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { motion,AnimatePresence } from 'framer-motion';
const Header = () => {
  const [ismenuclicked, setIsmenuclicked] = useState(false)
  const handleMenuClick = () =>{
    setIsmenuclicked(true)
    document.body.style.overflow = "hidden";
  }
  const handleClose = () =>{
    setIsmenuclicked(false)
    document.body.style.overflow = "auto";
  }
  return (
    <div className='w-full h-[50px] sticky top-0 backdrop-blur-md bg-[rgba(255,255,255,0.2)] z-40'>
      <div className='w-full h-full border-b-[1px] border-black  top-0 relative tracking-tighter  backdrop:blur-md'>
          <div className='mx-auto max-w-2xl lg:max-w-7xl h-full'>
              <div className='flex justify-between items-center h-full px-4 lg:px-[50px]'>
                  <div>Logo</div>
                  <ul className='hidden lg:flex items-center justify-center gap-[10px]'>
                    
                    <PageButton className={"flex justify-center items-center gap-[10px] text-sm bg-[#3BA2FF] text-black py-2"}>
                      Locate<HiArrowUpRight />
                    </PageButton>
                    <PageButton className={"flex justify-center items-center gap-[10px] text-sm bg-black text-white py-2"}>
                      Enquire <HiArrowUpRight />
                    </PageButton>
                    <PageButton className={"flex justify-center items-center gap-[10px] text-sm bg-green-500 text-black py-2"}>
                      Whatsapp <HiArrowUpRight />
                    </PageButton>
                  </ul>
                  <div className='lg:hidden flex justify-center items-center gap-[20px]' >
                    <PageButton className={"flex justify-center items-center gap-[10px] text-sm bg-black text-white py-2"}>
                      Enquire <HiArrowUpRight />
                    </PageButton>
                  <div onClick={handleMenuClick}>
                  <IoMenuSharp className='text-2xl '/>
                  </div>
                  </div>
                  <AnimatePresence>
                  {
                    ismenuclicked && (<motion.div initial={{opacity:0,y:50,scale:1.2}} animate={{opacity:1,y:0, scale:1}} exit={{opacity:0,y:50,scale:1.2}} transition={{ease:"circInOut"}} className='fixed top-0 left-0 bg-white w-screen h-screen flex flex-col justify-start items-start py-[50px] px-[50px]'>
                      <div className='w-full flex justify-between' >
                      <h1 className='text-4xl font-medium'>Menu</h1>
                      <div onClick={handleClose}>
                      <IoMdClose className='text-4xl'/>
                      </div>
                      </div>
                      <ul className=' flex flex-col justify-start items-start py-[30px] gap-[10px] text-2xl'>
                     
                    <PageButton className={"flex justify-center items-center gap-[10px] text-4xl bg-[#3BA2FF] text-black py-2"}>
                      Locate<HiArrowUpRight />
                    </PageButton>
                      <PageButton className={"flex justify-center items-center gap-[10px] text-4xl bg-black text-white py-2"}>
                      Enquire <HiArrowUpRight />
                    </PageButton>
                      <PageButton className={"flex justify-center items-center gap-[10px] text-4xl bg-green-500 text-black py-2"}>
                      Whatsapp <HiArrowUpRight />
                    </PageButton>
                    <div className='flex flex-col gap-4 py-8'>
                        <div className='flex flex-col justify-start items-start'>
                        <p className='text-sm'>Business Contact.</p>
                        <p className='text-2xl'>9443919192</p>
                        </div>
                        <div className='flex flex-col justify-start items-start'>
                        <p className='text-sm'>Business Email.</p>
                        <p className='text-2xl'>rickievishal@gmail.com</p>
                        </div><div className='flex flex-col justify-start items-start'>
                        <p className='text-sm font-medium'>Kodimadan Hardwares and Paints.</p>
                        <p className='text-xs'>Copyright @2025, Kodimadan Hardwares and Paints, All rights reserved</p>
                        </div>
                    </div>
                      </ul>
                    </motion.div>)
                  }
                  </AnimatePresence>
              </div>
          </div>
    </div>
    </div>
  )
}

export default Header