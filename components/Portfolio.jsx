import Image from 'next/image'

const Portfolio = () => {
  return(
    <div className= 'text-center max-w-[1240px] mx-auto py-16 space-y-6'>
      <h1 className= 'text-2xl font-bold text-black'>Travel Photos</h1>
      <div className= 'grid grid-cols-2 md:grid-cols-5 md:grid-rows-2 p-2 md:p-4 gap-2'>
        <div className= 'w-full h-full col-span-2 md:col-span-3 md:row-span-2'>
          <Image 
            src= 'https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' 
            alt= '/' 
            layout= 'responsive' 
             width= '677' 
             height= '456' 
            objectFit= 'cover'          
          />
        </div>
        <div className= 'w-full h-full'>
          <Image 
            src= 'https://images.unsplash.com/photo-1623257421326-29d3e1bb0e1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' 
            alt= '/' 
            layout= 'responsive' 
            width= '215' 
            height= '217' 
            objectFit= 'cover'
          />
        </div>
        <div className= 'w-full h-full'>
          <Image 
            src= 'https://images.unsplash.com/photo-1617334140746-03dc1cc27593?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' 
            alt= '/' 
            layout= 'responsive' 
            width= '215' 
            height= '217' 
            objectFit= 'cover' 
          />
        </div>
        <div className= 'w-full h-full'>
          <Image 
            src= 'https://images.unsplash.com/photo-1551749005-6b94ff060954?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=886&q=80' 
            alt= '/' 
            layout= 'responsive' 
            width= '215' 
            height= '217' 
            objectFit= 'cover'
          />
        </div>
        <div className= 'w-full h-full'>
          <Image 
            src= 'https://images.unsplash.com/photo-1598707206160-0a6b20211774?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' 
            alt= '/' 
            layout= 'responsive' 
            width= '215' 
            height= '217' 
            objectFit= 'cover'
          />
        </div>
      </div>
    </div>
  )
}

export default Portfolio;