import React from 'react';
import {mealData} from '../data/data';
import {ArrowSmRightIcon} from '@heroicons/react/outline';

const Meal = () => {
  return (
    <div className='max-w-[1520px] m-auto px-4 py-12'>
       <h1 className='text-red-700 font-bold text-center py-2'>
      Our Meal
     </h1>

     <div className='flex flex-col lg:flex-row justify-center '>
               <div className='flex justify-center md:justify-center'>
               <button className='px-4 py-2 mr-2 rounded-2xl border-red-700 text-white bg-red-700 hover:bg-black/50 hover:text-red-700 hover:border-red-700' >
            All </button>
            
            <button className=' px-4 py-2  mr-2 rounded-2xl border-red-700 text-white bg-red-700 hover:bg-black/50 hover:text-red-700  hover:border-red-700 ' >
            Pizza </button>
            <button className='px-4 rounded-2xl mr-2 border-red-700 text-white bg-red-700 hover:bg-black/50 hover:text-red-700  hover:border-red-700 ' >
          Chicken </button>
            <button className=' px-4 rounded-2xl mr-2 border-red-700 text-white bg-red-700 hover:bg-black/50 hover:text-red-700  hover:border-red-700 ' >
            Soups </button>
               </div>
     </div>
     <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-4'>
      {
        mealData.map((item) =>(
          <div  key={item.id}  className='border-none hover:scale-105 duration-300'>
            <img src={item.image}
            className='w-full h-[200px] object-cover rounded-lg '
            alt={item.name}
            />
            <div className='flex justify-between py-2 px-2'>
              <p className='font-bold'>
                {item.name}
              </p>
              <p className='bg-red-700 h-18 w-18 rounded-full -mt-10
               text-white py-4 px-2 border-8 font-bold'>{item.price}</p>

              </div>
              <div className='pl-2 py-4 -mt-7'>
                <p className='flex items-center text-indigo-600'>Veiw More <ArrowSmRightIcon className='w-5 ml-2'/></p>

                </div>
          </div>
        ))
      }

     </div>

    </div>
  )
}

export default Meal