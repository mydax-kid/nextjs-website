import Link from 'next/link'
import {useRouter} from 'next/router'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import {useState, useEffect} from 'react'

const Navbar= () => {
  const [menu, setMenu] = useState(false)
  const [bgColor, setBgColor] = useState('transparent')
  const [text, setText] = useState('white')
  const {pathname} = useRouter()
  const router = useRouter()

  const handleMenu = () => setMenu(!menu)

  useEffect(() => {
    window.addEventListener('scroll', () => {
    if(window.scrollY >= 600) {
      setBgColor('black')
      setText('white')
    } 
    else if (window.scrollY >= 10) {
      setBgColor('white')
      setText('black')
    }
    else {
      setBgColor('transparent')
      setText('white')
    }
  })
  }, [])

  useEffect(() => setMenu(false) ,[pathname, router.query.slug])
  
  
  return(
    <div className= 'fixed top-0 left-0 w-full z-20 duration-1000 ease-in'
      style= {{backgroundColor: bgColor, color: text}}
      >
      <div className= 'max-w-[1240px] flex justify-between items-center bg-transparent p-4 m-auto text-white'>
        <Link href= '/'>
          <h3 className= 'text-xl font-bold cursor-pointer' style= {{color: text}}>Capture</h3>
        </Link>
        <ul className= 'hidden md:flex justify-between items-center gap-6' style= {{color: text}}>
          <li className= 'hover:scale-110 ease-out duration-200'>
            <Link href= '/'>Home</Link>
          </li>
          <li className= 'hover:scale-110 ease-out duration-200'>
            <Link href= '/#gallery'>Gallery</Link>
          </li>
          <li className= 'hover:scale-110 ease-out duration-200'>
            <Link href= '/work'>Work</Link>
          </li>
          <li className= 'hover:scale-110 ease-out duration-200'>
            <Link href= '/contact'>Contact</Link>
          </li>
        </ul>
        {/* mobile-menu */}
        <div className= 'md:hidden z-[100] text-white cursor-pointer' onClick= {handleMenu} style= {{color: text}}>
          {!menu ? <AiOutlineMenu size={20} /> : <AiOutlineClose size= {20}/>}
        </div>
        <div className= { `absolute top-0 w-full h-screen md:hidden flex justify-center items-center bg-black text-white ease-in duration-300 z-50 ${!menu ? 'left-[-100%]' : 'left-0'}` }>     
          <ul>
            <li onClick= {() => setMenu(false)} className='p-6 hover:text-gray-500'>
              <Link href= '/'>Home</Link>
            </li>
            <li onClick= {() => setMenu(false)} className='p-6 hover:text-gray-500'>
              <Link href= '/#gallery'>Gallery</Link>
            </li>
            <li className='p-6 hover:text-gray-500'>
              <Link href= '/work'>Work</Link>
            </li>
            <li className='p-6 hover:text-gray-500'>
              <Link href= '/contact'>Contact</Link>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar;