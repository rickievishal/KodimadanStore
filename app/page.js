import React,  from 'react'
import PageButton from './components/PageButton'
import { HiArrowLongRight } from 'react-icons/hi2'
import ProductComponent from './components/ProductComponent'
import PageInput from './components/PageInput'
import Form from './components/Form'
import Marquee from 'react-fast-marquee'

const page = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center tracking-tighter'>
        <div className='w-full flex flex-col justify-center items-center'>
                <div className='max-w-7xl mx-auto  pt-[100px] flex flex-col justify-center items-center px-4 '>
                      <div className='flex flex-col justify-center items-center'>
                          <h2 className='text-center text-4xl lg:text-3xl '>
                          All you need for your dream House!!
                          </h2>
                          <p className='text-md lg:text-lg text-center pt-2'>
                          we ship Quality and affordable products
                          </p>
                          <PageButton className={"bg-[#D5E3F0] px-8 py-2 flex items-center justify-center gap-[10px] text-lg  lg:text-2xl mt-8"}>
                            BROWSE  <HiArrowLongRight className='text-4xl'/>
                          </PageButton>
                      </div>
                </div>
                <div className='w-full mt-8'>
                  <Marquee className="bg-black text-white h-[30px] text-sm tracking-wider" autoFill={true}>
                  Welcome to Kodimadan Hardwares and Paints - Tenkasi's Trusted Supplier of Asian Paints Products like Royale Glitz, Apcolite Premium Emulsion, Tractor Emulsion, Apex Ultima, Royale Play Texture, and WoodTech Melamyne! | 🔩 We also offer a comprehensive range of hardware essentials including nuts, bolts, screws, fasteners, hand tools, power tools, plumbing supplies, electrical fittings, and safety equipment from leading brands! | 🛠️ Visit us for all your painting and hardware needs!
                  </Marquee>
                </div>
                <div className='w-full h-[550px] flex justify-center items-center  overflow-hidden'>
                    <img src="/assets/imgs/paintAd.jpg" className='w-full h-full object-cover'/>
                </div>
        </div>
        {/* about our origin section    */}
        <div className='w-full flex justify-center items-center bg-[#D5E3F0]'>
            <div className='w-full  lg:h-[600px] flex flex-col lg:grid lg:grid-cols-2'>
                  <div className='w-full lg:max-w-4xl ml-auto flex flex-col justify-start items-start pt-[50px] lg:pt-[150px] pb-[50px] px-8 lg:col-span-1'>
                      <h2 className='w-full text-4xl text-center sm:text-center lg:text-start xl:text-start '>
                      “WE ARE A TRUSTED
                      TRADER BASED AT KADAYAM”
                      </h2>
                      <p className='max-w-sm mx-auto lg:mx-0 text-xs text-center sm:text-center lg:text-start xl:text-start mt-4'> 
                      We are one of the leading hardware and paint dealer based at Tenkasi. We are one of the leading hardware and paint dealer based at Tenkasi.
                      </p>
                      <h3 className='w-full text-4xl text-center sm:text-center lg:text-start xl:text-start  mt-[50px]'>
                      “மலிவில் உயர்ந்த தரம், உங்கள் கனவு இல்லத்திற்குச் சிறந்த நிறைவு”
                      </h3> 
                  </div>
                  <div className='w-full h-full  border-t-[1px] lg:border-t-0 lg:border-l-[1px] border-black relative lg:col-span-1'>
                    <div className='absolute top-0 -translate-y-[50%] translate-x-[50%] right-[50%] lg:left-0 lg:-translate-x-[20%] lg:top-[50%] '>
                        <PageButton className={"py-2 px-8 text-2xl flex items-center justify-center gap-[10px] bg-[#D5E3F0]"}>
                          Locate <HiArrowLongRight/>
                        </PageButton>
                    </div>
                    <div className='w-full h-[600px] overflow-hidden '>
                            <img className='w-full h-full object-cover ' src='/assets/imgs/location.png'/>
                        </div>
                  </div>
            </div>
        </div>
        {/* products browser section  */}
        <div className='w-full flex justify-center items-center bg-[#F6F6F6]'>
            <div className='w-full max-w-2xl lg:max-w-7xl lg:px-[50px] mx-0  px-4'>
            <div className='w-full flex items-center justify-between '>
              <h3 className='w-full text-left text-2xl py-[50px]'>
                Products Catalogue
              </h3>
              <PageButton className={"py-2 px-8 text-2xl flex items-center justify-center gap-[10px] bg-[#D5E3F0]"}>
                          Enquire <HiArrowLongRight/>
              </PageButton>
            </div>
            <div className='w-full grid grid-cols-2 lg:grid-cols-4 gap-2 gap-y-4 pb-4'>
               <div className='col-span-1 w-full h-full'>
               <ProductComponent productName={"Deluxe Premium Paint"} manufacturer={"Asian Paints"}/>
               </div>
               <div className='col-span-1 w-full h-full'>
               <ProductComponent productName={"Deluxe Premium Paint"} manufacturer={"Asian Paints"}/>
               </div>
               <div className='col-span-1 w-full h-full'>
               <ProductComponent productName={"Deluxe Premium Paint"} manufacturer={"Asian Paints"}/>
               </div>
               <div className='col-span-1 w-full h-full'>
               <ProductComponent productName={"Deluxe Premium Paint"} manufacturer={"Asian Paints"}/>
               </div>
               <div className='col-span-1 w-full h-full'>
               <ProductComponent productName={"Deluxe Premium Paint"} manufacturer={"Asian Paints"}/>
               </div>
               <div className='col-span-1 w-full h-full'>
               <ProductComponent productName={"Deluxe Premium Paint"} manufacturer={"Asian Paints"}/>
               </div>
               <div className='col-span-1 w-full h-full'>
               <ProductComponent productName={"Deluxe Premium Paint"} manufacturer={"Asian Paints"}/>
               </div>
               <div className='col-span-2 lg:col-span-4 mt-4'>
               <h5 className='text-2xl'>
                Nuts and bolts.
               </h5>
               </div>
               <div className='col-span-1 w-full h-full'>
               <ProductComponent productName={"Deluxe Premium Paint"} manufacturer={"Asian Paints"}/>
               </div>
               <div className='col-span-1 w-full h-full'>
               <ProductComponent productName={"Deluxe Premium Paint"} manufacturer={"Asian Paints"}/>
               </div>
            </div>
            </div>
        </div>
        <div className='max-w-7xl flex flex-col justify-center items-center mx-auto px-4 py-4 mt-[50px]'>
            <div className='w-full h-[300px] border-[1px] border-black relative'>
                <img className='w-full h-full object-cover' src='/assets/imgs/tools.png'/>
                <div className='absolute top-0 -translate-y-[50%] right-[50%] translate-x-[50%] '>
                <PageButton className={"text-2xl px-8 py-2 flex justify-center items-center gap-[10px] bg-[#D5E3F0]"}>
                  Services <HiArrowLongRight/>
                </PageButton>
                </div>
            </div>
            <div className='w-full py-8 flex flex-col justify-start items-start'>
                <h5 className='text-4xl max-w-xl'> 
                Tools and Equipment to bring your
                dream into a reality!
                </h5>
                <p className='text-sm leading-tight max-w-lg mt-2'>
                Tools and Equipment to bring your dream into a reality! Tools and Equipment to bring your dream into a reality! Tools and
                Equipment to bring your dream into a reality!
                </p>
                <PageButton className={"text-2xl px-8 py-2 flex justify-center items-center gap-[10px] bg-black text-white mt-8"}>
                  Enquire Now <HiArrowLongRight/>
                </PageButton>
            </div>
        </div>
        <div className='max-w-7xl mx-auto '>
          <div className='w-full flex flex-col items-center justify-center'>
            <h6 className='text-3xl'>
              Meet the Founder
            </h6>
            <div className='w-full  mt-8 relative overflow-hidden py-4 px-4 pb-[250px]'>
                  <p className='w-full text-center max-w-xl sm:max-w-2xl sm:text-2xl lg:max-w-4xl text-2xl lg:text-3xl'>
                  "We provide high-quality paints and hardware at affordable prices to help you build your dream home. Choose the best in quality and create the beauty your home deserves. Make your dreams a reality with us!"
                  </p>
               
                  <div className='w-[400px] pr-4 absolute left-[50%] -translate-x-[50%] bottom-0'>
                   
                      <img src='/assets/imgs/subject.png' className='w-full h-full object-cover'/>
                  </div>
            </div>
          </div>
        </div>
        <div className='w-full bg-black py-[100px] flex flex-col px-4'>
              <div className='flex flex-col justify-center items-center gap-2'>
                <p className='text-white text-sm'>
                  Reach us out through whatsapp
                </p>
             <div className='text-3xl lg:text-5xl flex items-center justify-center gap-[8px]'>
             <p className='bg-clip-text text-center bg-gradient-to-b from-gray-50 via-gray-100 to-black inline-block text-transparent'>Call</p>
              <p className='bg-clip-text text-center bg-gradient-to-b from-gray-50 via-gray-100 to-black inline-block text-transparent'>us</p>
              <p className='bg-clip-text text-center bg-gradient-to-b from-gray-50 via-gray-100 to-black inline-block text-transparent'>at</p>
              <p className='bg-clip-text text-center bg-gradient-to-b from-gray-50 via-gray-100 to-black inline-block text-transparent'>9443919192</p>
             </div>
             <p className='text-white text-sm mt-4'>
              Email us through mubesh@gmail.com
             </p>
             <PageButton className={"text-2xl px-8 py-2 bg-white text-black flex justify-center items-center gap-[10px] mt-8"}>
              Schedule a Call <HiArrowLongRight/>
             </PageButton>
              </div>
        </div>
        <div className='w-full'>
              <div className='max-w-6xl mx-auto py-4 px-2 sm:px-8'>
                  <div className='flex flex-col justify-start items-start '>
                    <p className='text-2xl text-left max-w-lg my-8'>
                    Place your queries here, Our team will reach you
                    out very soon
                    </p>
                    <h6 className="text-4xl text-left ">
                    Enquiry form.
                    </h6>
                  </div>
                 <div className='w-full py-8'>
                    <Form/>
                 </div>
              </div>
        </div>
    </div>
  )
}

export default page