
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section7 from './Section7'
import Section6 from './Section6'
import Section8 from './Section8'
import { Button } from '@mui/material'
import { ArrowUpwardSharp } from '@mui/icons-material'



export default function Home() {
  
  return (
    <div >
        
        <Section1></Section1>
        <Section2 ></Section2>
        <Section3></Section3>
        <Section4></Section4>
        <Section5></Section5>
        <Section6></Section6>
        <Section7></Section7>
        <Section8></Section8>
        
        
          <Button onClick={()=>{
          window.scrollTo({top:0,left:0,behavior:'smooth'})
        }} size='large' sx={{position: 'fixed',
        padding: '1rem ',
        fontSize: '15px',
        bottom: '35px',
        right: '35px',
        backgroundColor: 'black',
        color: '#fff',
        textAlign: 'center',}}><ArrowUpwardSharp/></Button>
       
    </div>
  )
}
