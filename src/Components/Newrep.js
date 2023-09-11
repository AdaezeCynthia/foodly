
import React, {useState} from 'react';
import {ingredient} from '../ingredient/ingredient';
import {ArrowSmRightIcon} from '@heroicons/react/outline';
import {PiBowlFoodFill} from 'react-icons/pi';

const Newrep = () => {
    const [showIng, setShowIng] = useState({})
    console.log(showIng)
    const toggleIngredients = () => {
        setShowIng(!showIng);
      };
    
    
  return (


   <div className='max-w-[1520px] m-auto px-4 py-12'>
   <h1 className='text-red-700 font-bold text-center py-4' >
           You Can Also Make it Yourselve. Get Recipe
 </h1>


    <div  className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 '>
     {ingredient.map((item)=>{
        return <div key={item.id} > 
           <div >
            <div >
            <img src={item.img} alt={item.name} className=' border-none hover:scale-105 duration-300 w-full h-[250px] object-cover rounded-lg '/>
            </div>
            <p className='font-bold my-4'>
                {item.recipe}
            </p>

            <div> 
            
            <div onClick={toggleIngredients }
         className='cursor-pointer '>
         <p className='flex'> Click 
            <PiBowlFoodFill className='text-indigo-600  border-none hover:scale-105 mx-1 ' size={25} 
          />
          
          to 
          <span className='mx-[2px] font-bold  text-red-700'  >
          Get Recipe
          </span>
           </p>
          

          <div className= {showIng ? "  fixed  left-0 w-[300px]  bg-white z-10 duration-300":
                  " realative w-[300px]  bg-white z-10 duration-300"} >
             
            

         <h2 className='font-bold text-red-700 '>Ingredients:</h2>
                  <ol>
                {item.ing.map((ingredient, index) => (
             <li key={index}>{ingredient}</li>
                ))}
                   </ol>

                     <br/>

                     <div>
                      <div >
                                 <h2 className='font-bold text-red-700 '>Process:</h2>
                              <ul>
                                <li>
                                {item.process}
                                </li>
                              </ul>
                         </div>
                      </div>





        </div>
                 </div>
           </div>


            </div>
        </div>
     })}
    </div>
    </div>
  )
}

export default Newrep