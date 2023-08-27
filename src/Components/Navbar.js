
import React, {useState} from 'react';
import {AioutlineMenu, AiOutlineSearch,AiOutlineClose, AiFillTag, AiOutlineMenu} from 'react-icons/ai';
import {BsFillCartFill,BsPerson} from 'react-icons/bs';
import {TbTruckReturn} from 'react-icons/tb';
import{FaUserFriends, FaGoogleWallet} from 'react-icons/fa';
import {MdHelp, MdOutlineFavorite} from 'react-icons/md';

const Navbar = () => {
  const  [sideNav, setSideNav ] = useState(false)
  console.log(sideNav)
   return(
    <div className='max-w-[1520] mx-auto flex 
    justify-between items-center p-4'>

      <div className='flex items-center '>
        <div onClick={()=> setSideNav(!sideNav)}
         className='cursor-pointer'>
          <AiOutlineMenu   size={25} />
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'> My
              <span>
                Foodly
              </span>
        </h1>
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full 
        p-1 text-[14px]'>
          <p className='bg-red-700 text-white rounded-full p-2  text-bold'>Get</p>
          <p className='p-2  text-black'>Delivery</p>

        </div>
      </div>
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] 
      sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch  size={25}/>
        <input  className='bg-transparent p-2 w-full focus:outline-none'
        type='text' placeholder='Searh meals'  />
      </div>
      <button className='bg-red-700 text-white  md: flex     items-center py-2 px-5 
      rounded-full'>
            
            <BsFillCartFill size={20}  />Cart
        </button>
        {
          sideNav ? (<div className='bg-black/60 fixed w-[100%] h-screen z-10 top-0 left-0 '>

          </div>) : ("")
        }

        <div className= {sideNav ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300":
                  "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"} >
             
             <AiOutlineClose onClick={()=> setSideNav(!sideNav)}   size={25}
             className='absolute  right-4 top-4 cursor-pointer'/>
             <h2 className='text-2xl p-4'>My<span className='text-red-600 font-bold'>Foodly </span></h2>
                     <nav>
                      <ul className='flex flex-col p-4 text-gray-900'>
                        <li className='text-xl py-4 flex'>
                          <BsPerson  className='mr-4 text-white bg-black rounded-full'
                                    size={25}/>
                                    My Account

                        </li>

                        <li className='text-xl py-4 flex'>
                          <TbTruckReturn className='mr-4 text-white bg-black rounded-full'
                                    size={25}/>
                                    Delivery

                        </li>

                        <li className='text-xl py-4 flex'>
                          <MdOutlineFavorite className='mr-4 text-white bg-black rounded-full'
                                    size={25}/>
                                    My Favorite

                        </li>

                        <li className='text-xl py-4 flex'>
                          <FaGoogleWallet className='mr-4 text-white bg-black rounded-full'
                                    size={25}/>
                                  My   Wallet

                        </li>

                        <li className='text-xl py-4 flex'>
                          <MdHelp className='mr-4 text-white bg-black rounded-full'
                                    size={25}/>
                                    Help

                        </li>
                        

                        

                        
                      </ul>
                     </nav>
        </div>
        

    </div>
  )

   }
export default Navbar

















