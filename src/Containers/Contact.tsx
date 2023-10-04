import { useEffect } from 'react'
import NavBar from '../Components/Common/Header/NavBar'
import ContactDesign from '../Components/ContactUs/ContactDesign'


export default function Contact() {
  useEffect(()=>{
  
    (function(d, m){
        var kommunicateSettings = 
            {"appId":"b6cc99758e804e143be1107aa25f99af","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});


},[])
  return (
    <div>
        <NavBar/>
        <ContactDesign/>
       
    </div>
  )
}
