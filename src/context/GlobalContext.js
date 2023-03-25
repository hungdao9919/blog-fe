import { useState, createContext,useEffect} from 'react'
import getProfileInfo from '../services/getProfileInfo'
const GlobalContext = createContext()

const GlobalProvider = ({children})=>{
    const [accessToken, setAccessToken] = useState()  
    const [isAdmin, setIsAdmin] = useState(false) 
    const [isLogged, setIsLogged] = useState(false) 
    const [profileInfo, setProfileInfo] = useState() 
    // profile info
    useEffect(()=>{
        async function handleGetProfileInfo (){
            const result  =  await getProfileInfo() 
            if(result?.roles?.Admin){ 
                setIsAdmin(true) 
            }
            else{
                setIsAdmin(false)   
            }
            setProfileInfo(result) 
         }

         handleGetProfileInfo() 
    },[])  
    //setIsLogged
    
    useEffect( ()=>{
        const token = localStorage.getItem('key')
        if(token){
            setIsLogged(true)
        }
        
    },[])  
     
   
 


     
     
    return <GlobalContext.Provider value={{accessToken, setAccessToken,isAdmin, setIsAdmin,isLogged, setIsLogged,profileInfo, setProfileInfo}}>
        {children}
    </GlobalContext.Provider>
}
export {GlobalProvider, GlobalContext}
