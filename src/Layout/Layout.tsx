
import NavBar from '../Components/Common/Header/NavBar'
import Footer from '../Components/Common/Footer/Footer'
import {motion,useInView,useAnimation} from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Button } from '@mui/material'
import { ArrowUpwardSharp } from '@mui/icons-material'

export default function Layout({children}:any) {
  const ref=useRef(null)
  const isInView=useInView(ref,{once:true})
  const mainControls=useAnimation()
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    
    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(()=>{
    if(isInView){
     mainControls.start("visible")
     
    }
  },[isInView])
  return (
    // <div ref={ref}>
    <motion.div ref={ref}  variants={{
            hidden:{opacity:0,y:75},
            visible:{opacity:1,y:0}
        }}
        initial="hidden"
        animate={mainControls}
        transition={{duration:0.7,delay:0.25}}
        >
          
     <NavBar/>
     <div>
          {children}
     
    </div>
    {showScrollButton && (
          <Button onClick={()=>{
          window.scrollTo({top:0,left:0,behavior:'smooth'})
        }}  sx={{position: 'fixed',
        padding: '1rem ',
        fontSize: '12px',
        bottom: '30px',
        right: '30px',
        backgroundColor: 'black',
        color: '#fff',
        textAlign: 'center',":hover":{
          backgroundColor:'grey'
        }}}><ArrowUpwardSharp/></Button>
        )}
    <Footer/>
    </motion.div>
    // </div>
    
  )
}
