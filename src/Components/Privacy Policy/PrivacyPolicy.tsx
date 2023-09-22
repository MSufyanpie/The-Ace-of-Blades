
import  { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown';
import { Section1 } from './Section1';
import NavBar from '../Common/Header/NavBar';
import { Box, Typography } from '@mui/material';
import Footer from '../Common/Footer/Footer';


export const PrivacyPolicy = () => {
    const [markdownContent, setMarkdownContent] = useState('');       
  useEffect(() => {
   
    fetch('/Pp.md')
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text))
      .catch((error) => console.error('Error fetching privacy policy:', error));
  }, []);
  return (
    <div>
        <NavBar/>
        <Section1/>
        <Box px={5} >
        <Typography fontStyle={'Oswald'} variant='body1' color={'#464a46'}><ReactMarkdown >{markdownContent}</ReactMarkdown></Typography></Box>
        <Footer/>
    </div>
  )
}
