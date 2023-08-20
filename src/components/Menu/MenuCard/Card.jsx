import React from 'react';

const Food = ({name, image, price, id}) => {
  return (
    <div className='border rounded-lg shadow-lg hover:scale-105 duration-300'>
        <img 
            className='w-full h-[200px] object-cover rounded-t-lg'
            src={image} 
            alt={name} 
        />
        <div className='flex justify-between px-2 py-4'>
            <p className='font-bold'>{name}</p>
            <p>
                <span className='bg-orange-500 text-white py-1 px-3 rounded-full'>{price}</span>
          </p>
        </div>
      </div>
  )
}

export default Food