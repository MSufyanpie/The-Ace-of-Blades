
import {  Typography,Box,Stack,IconButton,Button,  useTheme, useMediaQuery} from "@mui/material";
import {AiOutlineFire,} from 'react-icons/ai'
import {FaRegHandshake,FaFingerprint} from 'react-icons/fa'
import {Image} from 'react-bootstrap'
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'
export default function Section3() {
    const theme=useTheme()
    const isMobile=useMediaQuery(theme.breakpoints.down('md'))
  return (
    
        <motion.div 
        variants={{
            hidden:{opacity:0,y:100},
            visible:{opacity:1,y:0}
        }}
        initial="hidden"
        animate="visible"
        transition={{duration:0.8,delay:0.6}}
        >
    <Box width={isMobile?'100%':1000} m={'auto'} >
        <Stack  direction={{xs:'column',md:'row'}} spacing={5} marginTop={'10%'} 
       >
        <Box width={isMobile?'100%':'800px'} marginTop={'5%'}>
    <Typography  fontFamily={'Oswald'} gutterBottom   variant='h3' fontWeight={'bold'}>WHO ARE WE?</Typography>
    <Typography  fontFamily={'Oswald'}gutterBottom variant='h6'>HOME MADE & HAND CRAFTED</Typography>
    <Typography fontFamily={'Oswald'} textAlign={'justify'} gutterBottom variant='body1'>WE ARE ACE OF BLADES AND JUST LIKE YOU, WE APPRECIATE THE FINEST CRAFTSMANSHIP FOR THE MOST RUGGED TERRAIN. WE ARE HERE TO SHARE A PASSION FOR ONLY THE SHARPEST AND MORE BEAUTIFUL DAMASCUS BLADES, NO BELLS AND HUNTING WHISTLES, JUST BEAUTIFUL AND FINELY CRAFTED BLADES.</Typography><br/>
    <Typography fontFamily={'Oswald'} textAlign={'justify'} gutterBottom variant='body1'>THE CRAFTING PROCESS OF EACH KNIFE IS A HUMBLE JOURNEY INDEED, AN EXPERIENCE WE HOPE TO SHARE WITH YOU. HANDCRAFTED BY ONLY THE BEST, WE BELIEVE EACH BLADE TELLS A STORY, CAPTURES A MEMORY AND HOLDS THE POTENTIAL TO ADD TO YOUR UNIQUE STORY. MADE FROM ONLY THE FINEST DAMASCUS, CARBON AND STAINLESS STEEL, OUR KNIVES ARE PERFECT FOR THE WILD TERRAIN OR FOR THE COLLECTION IN THE GLASS CASE.</Typography>   
    <br/>
    <Stack direction={'row'} spacing={10} >
    <Box sx={{":hover":{translate:'-20%'}}}>
        <Typography gutterBottom textAlign={'center'}>
        <IconButton  sx={{backgroundColor:'black',color:'white',fontSize:'50px'}}>
         <AiOutlineFire  ></AiOutlineFire>
        </IconButton>
        </Typography><br/>
        <Typography variant='h6' fontFamily={'Oswald'} >REAL DAMASCUS STEEL</Typography>
    </Box>

    <Box sx={{":hover":{translate:'-20%'}}}>
    <Typography gutterBottom textAlign={'center'}>
        <IconButton  sx={{backgroundColor:'black',color:'white',fontSize:'50px'}} >
         <FaRegHandshake></FaRegHandshake>
        </IconButton>
        </Typography><br/>
        <Typography variant='h6' fontFamily={'Oswald'} >HAND CRAFTED</Typography>
    </Box>

    
    <Box sx={{":hover":{translate:'-20%'}}}>
    <Typography gutterBottom textAlign={'center'}>
        <IconButton sx={{backgroundColor:'black',color:'white',fontSize:'50px'}}>
         <FaFingerprint></FaFingerprint>
        </IconButton>
        </Typography><br/>
        <Typography variant='h6' fontFamily={'Oswald'} >UNIQUELY MADE</Typography>
    </Box>
    </Stack>
    
    </Box>

    <Box width={isMobile?'100%':'700px'}  >
        <Image
        height={isMobile?'100%':'450px'}
        width={isMobile?'100%':'500px'}
        src='src\assets\home images\section3-image.jpeg'></Image>
        <Typography textAlign={'center'}>
        <Link to={'/AOBCollection'} style={{textDecoration:'none'}}>
        <Button  variant='contained' sx={{backgroundColor:'black',boxShadow:10, ":hover":{backgroundColor:"	#505050",color:'white'}}}>VIEW OUR PRODUCTS</Button></Link></Typography>
        
    </Box>
    </Stack><br/><br/>
    </Box>
    </motion.div>
   
  )
}
