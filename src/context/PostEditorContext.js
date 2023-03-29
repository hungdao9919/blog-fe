import { useState, createContext} from 'react' 
const PostEditorContext = createContext()

const PostEditorProvider = ({children})=>{ 
   
    const [isEdit,setIsEdit] =useState(false)    
    //giar xu bang true truoc
     
    return <PostEditorContext.Provider value={{isEdit,setIsEdit}}>
        {children}
    </PostEditorContext.Provider>
}
export {PostEditorProvider, PostEditorContext}
