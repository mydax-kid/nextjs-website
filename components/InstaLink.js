import {sliderData} from './sliderData.js'
import Image from 'next/image'
import {AiOutlineInstagram} from 'react-icons/ai'

const InstaLink = () => {
  return (
    <div className= 'max-w-[1240px] mx-auto py-24 text-center space-y-[15px]'>
      <h1 className= 'font-bold text-lg'>Follow me on Instagram</h1>
      <p>@Captur</p>
      <div className= 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4 lg:px-32 justify-items-center'>
        {
          sliderData.map((each, index) => {
            return(
              <div key= {index} className= 'relative w-full h-full'>
                  <Image 
                       src= {each.image} 
                       alt= ''                        
                       objectFit= 'cover'
                       layout= 'responsive'
                       width= '160'
                       height= '110'
                    />
                    <div className= 'absolute left-0 right-0 bottom-0 top-0 hover:bg-black/70 flex items-center justify-center text-white ease-out duration-300 group'>
                      <AiOutlineInstagram size= {30} className= 'hidden group-hover:block'/>
                    </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default InstaLink;