import React from 'react';
import { FaDribbbleSquare,FaFacebookSquare,FaGithubSquare,FaInstagramSquare,FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1520px] m-auto px-4 py-2 bg-[#24263b]'>
      <div className='py-16 px-4 grid lg:grid-cols-3  gap-8 text-gray-300'>
        <div>
          <h1 className='w-full text-3xl font-bold text-red-500 '>
               My Foodly
               </h1>
               <p>
                tfhgjhkjlkijuhygfdxcvbnmkjhgfcdxcvbnm
               </p>
               <div className=' flex justify-between md:w-[75%] my-6 '>
                <FaFacebookSquare size={30}/>
                <FaDribbbleSquare size={30}/>
                <FaGithubSquare size={30}/>
                <FaInstagramSquare size={30}/>
                <FaTwitterSquare size={30}/>

               </div>
               <div className='lg:col-span-2 flex justify-between mt-6 '>
                       <div >
                        <h6 className='font-medium text-[#9b9b9b] '>
                       
                        Location
                        </h6>
                        <ul>
                          <li className='py-2 text-sm '>Enugu</li>
                          <li className='py-2 text-sm '>Anambra</li>
                          <li className='py-2 text-sm '>Lagos</li>
                          <li className='py-2 text-sm '>Portharchort</li>
                          <li className='py-2 text-sm '>Abuja</li>
                        </ul>
                       </div>

                       <div className='lg:col-span-2 flex justify-between mt-6 '>
                       <div >
                        <h6 className='font-medium text-[#9b9b9b] '>
                       
                        Location
                        </h6>
                        <ul>
                          <li className='py-2 text-sm '>Enugu</li>
                          <li className='py-2 text-sm '>Anambra</li>
                          <li className='py-2 text-sm '>Lagos</li>
                          <li className='py-2 text-sm '>Portharchort</li>
                          <li className='py-2 text-sm '>Abuja</li>
                        </ul>
                       </div>
               </div>

               <div className='lg:col-span-2 flex justify-between mt-6 '>
                       <div >
                        <h6 className='font-medium text-[#9b9b9b] '>
                       
                        Location
                        </h6>
                        <ul>
                          <li className='py-2 text-sm '>Enugu</li>
                          <li className='py-2 text-sm '>Anambra</li>
                          <li className='py-2 text-sm '>Lagos</li>
                          <li className='py-2 text-sm '>Portharchort</li>
                          <li className='py-2 text-sm '>Abuja</li>
                        </ul>
                       </div>
               </div>
               </div>

               
          
        </div>

      </div>
      


    </div>
  )
}

export default Footer