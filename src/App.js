import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'   
import Home from './pages/Home'
import MyPosts from './pages/MyPosts'
import { PostsProvider } from './context/PostsContext' 
import Login from './pages/Login'
import Register from './pages/Register'
import PostEditor from './pages/PostEditor'  
import HeaderOnlyLayout from './components/Layouts/HeaderOnlyLayout'
import Setting from './pages/Setting'  
import PostDetail from './components/PostDetail'
import ProfileDetails from './components/ProfileDetails'
import Loadding from '../src/components/Loadding'
import { GlobalContext } from './context/GlobalContext'
import { useContext } from 'react'  
function App() { 
  const {isLoading, setIsLoading} = useContext(GlobalContext)

  return (
    
    <Router>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
       {isLoading && <Loadding/>}
      <div className="App">

        <Routes>
          <Route path='/' element={
          <HeaderOnlyLayout>
            
              <PostsProvider> 
                <Home/> 
              </PostsProvider>
             
          </HeaderOnlyLayout>
          }/> 
          <Route path='/post-details/:id' element={
          <HeaderOnlyLayout>
            
              <PostsProvider> 
                <PostDetail/> 
              </PostsProvider>
            
          </HeaderOnlyLayout>
          }/>  
          
        <Route path='/profile-details/:username' element={
          <HeaderOnlyLayout>
            
              <PostsProvider> 
                <ProfileDetails />
              </PostsProvider>
            
          </HeaderOnlyLayout>
          }/> 

          <Route path='/myposts' element={
          <HeaderOnlyLayout>
             
              <PostsProvider>   
                <MyPosts/> 
              </PostsProvider>
            
          </HeaderOnlyLayout>
          }/> 
           
          <Route path='/setting' element={
          <HeaderOnlyLayout>
              <Setting/>
          </HeaderOnlyLayout>}/>
          <Route path='/login' element={<HeaderOnlyLayout><Login/></HeaderOnlyLayout>}/> 
          <Route path='/register' element={<HeaderOnlyLayout><Register/></HeaderOnlyLayout>}/>
          <Route path='/editor' element={ 
          <HeaderOnlyLayout>
             
                <PostEditor/>
            
          </HeaderOnlyLayout>
             
          }/>  
        </Routes>
      </div>
    </Router>
  );
}

export default App;
