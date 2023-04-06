import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'  
import ListPosts from './components/ListPosts'
import Home from './pages/Home'
import MyPosts from './pages/MyPosts'
import { PostsProvider } from './context/PostsContext'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'
import PostEditor from './pages/PostEditor'  
import HeaderOnlyLayout from './components/Layouts/HeaderOnlyLayout'
// import { PostProvider } from './context/PostContext' 
import PostDetail from './components/PostDetail'
function App() { 

  return (
    <Router>
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
          <Route path='/myposts' element={
          <HeaderOnlyLayout>
             
              <PostsProvider>   
                <MyPosts/> 
              </PostsProvider>
            
          </HeaderOnlyLayout>
          }/>
          {/* <Route path='/posts/:id' element={<DefaultLayout><PostDetail/></DefaultLayout>}/> */}
          <Route path='/profile' element={
          <HeaderOnlyLayout>
              <Profile/>
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
