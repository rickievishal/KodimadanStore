"use client"
import React, { useState } from 'react'
import PageInput from './PageInput'
import PageButton from './PageButton'
import { HiArrowRight } from 'react-icons/hi2'
import { sendError } from 'next/dist/server/api-utils'
import { IoLogoWhatsapp } from "react-icons/io";
import axios from 'axios'

const Form = () => {
    const [name, setName] = useState("")
    const [addr, setaddr] = useState("")
    const [number, setNumber] = useState("")
    const [message, setMessage] = useState("")
    const handleName = (name) =>{
        setName(name)
    }
    const handleAddr = (addr) =>{
        setaddr(addr)
    }
    const handleNumber = (number) =>{
        setNumber(number)
    }
    const handleMessage = (message) =>{
        setMessage(message)
    }
    const handleSendMail = async(formData) => {
        try{
            const res = await axios.post("http://localhost:3000/api/nodemailer",formData)
        }catch(err) {
            console.log(err)
        }
    }
    const handleSubmit = (e) => {
        if(name === "" || number === "" || addr === "" ){
            alert("Fill the form to submit")
        }else{
            e.preventDefault(); // Prevent form refresh
            const formData = {
                name,
                addr,
                number,
                message
            }
            handleSendMail(formData)
    
            const whatsappNumber = '9443919192'; // Replace this with your WhatsApp number
            const formattedMessage = `${message} \n\n${name} ,\n${addr}\n${number}\n\nThank you for reaching out! We'll get back to you shortly.`;
            
            const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(formattedMessage)}`;
            window.open(whatsappLink, '_blank');}
    }
    
    
    return (
    <form className='w-full flex flex-col gap-y-6 ' onSubmit={handleSubmit}>
    <PageInput value={name} label={"Name"} placeholder={"Arivazhagan"} onChange={handleName} />
    <PageInput value={number} label={"Phone Number"} placeholder={"9442919192"} onChange={handleNumber} />
    <PageInput value={addr} label={"Address"} placeholder={"3/1723, Ramasamy Nagar, Sivakasi."} onChange={handleAddr} />
    <PageInput value={message} label={"Message"} placeholder={`Hey Hi, \n\tWe are interested in purchasing Deluxe Primer from Asian Paints in bulk. Could you please let us know if there are any discounts or special offers available for bulk orders?`} onChange={handleMessage} textfield={true} />
    <PageButton  className={" max-w-sm px-8 py-2 text-2xl bg-black text-white flex gap-[10px] justify-center items-center"}>
    <IoLogoWhatsapp className='text-green-500' /> Submit your Query <HiArrowRight/>
    </PageButton>
  </form>
  )
}

export default Form