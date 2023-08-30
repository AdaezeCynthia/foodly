import React ,{useState} from 'react'
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx';

const Hero = () => {
  const sliders =[
    
    {
      url: "https://res.cloudinary.com/dbkc6y0cy/image/upload/v1693181097/hero%20header/french_toast_ixpvbk.png"
    },
    { 
      url: "https://res.cloudinary.com/dbkc6y0cy/image/upload/v1693181084/burger_isw5tf.png"
    },
    {
      url: "https://res.cloudinary.com/dbkc6y0cy/image/upload/v1693180718/hero%20header/pot-mussels.jpg"
    },
    {
      url: 'https://res.cloudinary.com/dbkc6y0cy/image/upload/v1693181073/hero%20header/chef_wapqim.png'
    },
    {
      url :"https://res.cloudinary.com/dbkc6y0cy/image/upload/v1693180746/cld-sample-4.jpg"
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const prevSlider =() => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? sliders.length -1 : currentIndex -1 
    setCurrentIndex(newIndex)

   
  }

  const nextSlider = () => {
    const isLastSlide = currentIndex === sliders.length - 1
    const newIndex = isLastSlide ? 0: currentIndex + 1 
    setCurrentIndex(newIndex)
  }
  const moveToNextSlide =(slideIndex) => {
    setCurrentIndex(slideIndex)
  }
  return (
    <div className='max-w-[1520px] h-[500px] w-full py-4 px-4 relative'>
      <div className='w-full h-full  rounded-2xl bg-center bg-cover duration-500
      ' style={{backgroundImage: `url(${sliders[currentIndex].url})`}}>

      </div>
      <div className=' absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5
      text-2xl rounded-full p-2 bg-red-700 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlider} />
      </div>

      <div className='  absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5
      text-2xl rounded-full p-2 bg-red-700 text-white cursor-pointer'>
        <BsChevronCompactRight  onClick={nextSlider}/>
      </div>

      <div className='flex top-4 justify-center  py-2'>
        {
         sliders.map((slideItems,slideIndex) =>(
          <div key={slideIndex}
          onClick={() =>moveToNextSlide (slideIndex)}
          
          className='text-2xl cursor-pointer'>
            <RxDotFilled  className='hover:active'/>
           </div>

         ) )}

      </div>

    </div>
  )
}

export default Hero