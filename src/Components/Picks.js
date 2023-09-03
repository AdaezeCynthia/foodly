import React from 'react'
import {topPicks} from '../data/data';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const Picks = () => {
  return (
    <>
    
     <h1 className='text-red-700 font-bold text-center py-2'>
      Top Picks 
     </h1>
     <div className=' flex lg:flex max-w[1520px] m-auto py-2 px-2'>
      <Splide options={{perPage: 3, gap: '0.8rem', drag:'free', }}>
         {
          topPicks.map((item)=> {
          return(
            <SplideSlide key={item.id}>
            <div className='rounded-3xl relative '>
               <div className='absolute w-full h-full bg-black/50 rounded-3xl text-white'> 
                  <p className='px-2 '>{item.title} </p>
                  <p className='px-2 font-bold text-2xl pt-4'>
                    {item.price}
                  </p>
                  <button className=' bg-black/50 rounded-3xl   text-white mx-[20px] px-4
                  absolute  bottom-4'>Add To Cart </button>
               </div>
               <img className='h-[200px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105 easy-out
               duration-300'    
               src={item.img}
               alt={item.title}
               />

              
               </div>
               </SplideSlide>
          )  
          })
         }
         </Splide>
     </div>
    
    </>
    
  )
}

export default Picks

