import React from 'react'

const PageInput = ({className,onChange,label,placeholder,value,textfield = false}) => {
    const handleChange = (e) =>{
        onChange(e.target.value)
    }
  return (
    <div className='flex flex-col'>
        <label htmlFor="input-button" >
           {label}
        </label>
        {
            textfield ? <>
            <textarea name="Message" value={value} onChange={handleChange} placeholder={placeholder}  className='input-button min-w-[250px] min-h-[200px] py-2 max-w-lg  border-black border-[1px] px-2 text-xl focus:outline-[1px] focus:outline-black placeholder:font-light leading-tight' id=""></textarea>
            </>: <>
            <input placeholder={placeholder} type="text" className='input-button min-w-[250px] max-w-lg h-[50px] border-black border-[1px] px-2 text-xl  focus:outline-[1px] focus:outline-black placeholder:font-light ' value={value} onChange={handleChange} /></>
        }
    </div>
  )
}

export default PageInput