import {sliderData} from './sliderData.js'
import Image from 'next/image'
import {useState} from 'react'
import {FaArrowCircleLeft, FaArrowCircleRight} from 'react-icons/fa'


const Slider = () => {

  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent( current == sliderData.length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent( current == 0 ? sliderData.length - 1 : current - 1)
  }

  if(!Array.isArray(sliderData) || sliderData.length <= 0) return null
  
  return (
    <div id= 'gallery'>
      <h1 className= 'font-bold text-2xl text-center'>Gallery</h1>
      <div>
        {
          sliderData.map((each,index) => {
            return(
              <div key= {index} className= {index === current ? 'block relative py-12 px-2 lg:px-40 ease-in duration-1000' : 'hidden relative'}>
                <FaArrowCircleLeft 
                  size={40}
                  onClick= {prevSlide}
                  className= 'absolute top-[45%]  left-[60px] lg:left-[250px] text-white/70 hover:text-white cursor-pointer select-none z-10'
                />
                <Image src= {each.image} 
                   alt= '' 
                   width= '1440' 
                   height= '800' 
                   objectFit= 'cover'                
                />
                <FaArrowCircleRight 
                  size={40}
                  onClick= {nextSlide}
                  className= 'absolute top-[45%] right-[60px] lg:right-[250px] text-white/70 hover:text-white cursor-pointer select-none z-10'
                />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Slider;