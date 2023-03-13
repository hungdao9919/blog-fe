import { useState, createContext} from 'react'

const GlobalContext = createContext()

const GlobalProvider =({children})=>{
    
    const [accessToken, setAccessToken] = useState() 
    const [admin, setAdmin] = useState(true)  
    // const [isAdmin, setIsAdmin] = useState(false) 
    // const [isLogged, setIsLogged] = useState(false) 

     
    return <GlobalContext.Provider value={{accessToken,setAccessToken,admin, setAdmin}}>
        {children}
    </GlobalContext.Provider>
}
export {GlobalProvider, GlobalContext}
