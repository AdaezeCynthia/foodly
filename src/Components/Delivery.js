import React from 'react'


const Delivery = () => {
  return (
    <div className='w-[100%] bg-white py-16 px-4' >

      <h3 className='text-red-700  font-bold  text-2xl text-center'>
               About Us
      </h3>
      <div className=' flex    flex-row' >
                
                   <div className=' object-cover flex py-5 my-4 rounded-md ' >
                    <img  className='rounded-md object-cover sm:w-full' src='https://res.cloudinary.com/dbkc6y0cy/image/upload/v1693560622/Newcastle_Photographer___David_Griffen_Photography_iyaou0.jpg'/>
                    </div>
                   
                    <div className=' py-[20%] sm:my-8 px-2'>
                    <p className='text-orange-700  font-bold  text-4xl'>Get Eating 😋</p>
                    <h1 className='md:text-4xl sm:text-2xl text-2xl font-bold py-2'>Experience the ultimate convenience us</h1>
                      <p >
                      Get your favorite dishes delivered to your doorstep within 30 minutes.
                       Craving a culinary adventure at home? We've got you covered. Order our premium ingredients, and we'll
                       include step-by-step recipes for a chef-worthy experience in your own kitchen.

                      </p>
                      <button className='bg-black text-orange-700 w-[200px] rounded-md
                      font-medium my-6 mx-auto md:mx-0  py-3'> Get Started</button>
                      </div>
                   </div>
    </div>
    

    
  )
}

export default Delivery