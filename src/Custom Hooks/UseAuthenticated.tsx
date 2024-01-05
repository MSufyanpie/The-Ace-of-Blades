import {useEffect, useState} from "react";
import { auth } from '../Firebase/Firebase'
import { useNavigate } from "react-router-dom";


const useAuthenticated=()=>{
  
  const [user, setUser] = useState(null);
 const navigate=useNavigate()

   
 useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((user) => {
    //@ts-ignore
    setUser(user);

    if (!user) {
      navigate('/SignUp');
    }
  });

  return () => unsubscribe();
}, [navigate]);
}

  export default useAuthenticated;