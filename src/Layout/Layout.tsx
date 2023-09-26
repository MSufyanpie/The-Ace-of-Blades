
import NavBar from '../Components/Common/Header/NavBar'
import Footer from '../Components/Common/Footer/Footer'
import {motion,useInView,useAnimation} from 'framer-motion'
import { useEffect, useRef } from 'react'
export default function Layout({children}:any) {
  const ref=useRef(null)
  const isInView=useInView(ref,{once:true})
  const mainControls=useAnimation()
  const slideControls=useAnimation()
  useEffect(()=>{
    if(isInView){
     mainControls.start("visible")
     slideControls.start("visible")
    }
  },[isInView])
  return (
    <div ref={ref}>
    <motion.div   variants={{
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
    
    <Footer/>
    </motion.div>
  
    </div>
  )
}
