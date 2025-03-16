import React from 'react'

const ProductComponent = ({productName,manufacturer}) => {
  return (
    <div className='w-full min-w-[calc(20vw+80px)] lg:min-w-[200px]  h-[calc(20vw+200px)] max-h-[350px]'>
        <div className='h-[65%] lg:h-[80%] w-full bg-white border-black border-[1px]'> 

        </div>
        <div className='h-[35%] p-2 flex flex-col justify-start items-start'>
            <h4 className='text-lg leading-tight'>
                {productName}
            </h4>
            <p className='text-sm'>{manufacturer}</p>
            <p className='text-xs rounded-r-full rounded-l-full bg-black text-white px-2 py-1 '>{manufacturer}</p>

        </div>
    </div>
  )
}

export default ProductComponent