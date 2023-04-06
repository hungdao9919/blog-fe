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
import { PostProvider } from './context/PostContext'
import {PostEditorProvider} from './context/PostEditorContext'
import PostDetail from './components/PostDetail'
function App() { 

  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path='/' element={
          <HeaderOnlyLayout>
            <PostProvider>
              <PostsProvider>
                <PostEditorProvider>
                <Home/>
                </PostEditorProvider>
              </PostsProvider>
            </PostProvider>
          </HeaderOnlyLayout>
          }/> 
          <Route path='/post-details/:id' element={
          <HeaderOnlyLayout>
            <PostProvider>
              <PostsProvider>
                <PostEditorProvider>
                <PostDetail/>
                </PostEditorProvider>
              </PostsProvider>
            </PostProvider>
          </HeaderOnlyLayout>
          }/> 
          <Route path='/myposts' element={
          <HeaderOnlyLayout>
            <PostProvider>
              <PostsProvider>  
              <PostEditorProvider>
                <MyPosts/>
              </PostEditorProvider>
              </PostsProvider>
            </PostProvider>
          </HeaderOnlyLayout>
          }/>
          {/* <Route path='/posts/:id' element={<DefaultLayout><PostDetail/></DefaultLayout>}/> */}
          <Route path='/profile' element={
          <HeaderOnlyLayout>
            <PostProvider>
              <Profile/>
            </PostProvider>
          </HeaderOnlyLayout>}/>
          <Route path='/login' element={<HeaderOnlyLayout><Login/></HeaderOnlyLayout>}/>
          <Route path='/register' element={<HeaderOnlyLayout><Register/></HeaderOnlyLayout>}/>
          <Route path='/editor' element={
          <HeaderOnlyLayout>
            <PostProvider>
              <PostEditorProvider>
                <PostEditor/>
              </PostEditorProvider>
            </PostProvider>
          </HeaderOnlyLayout>
          }/>  
        </Routes>
      </div>
    </Router>
  );
}

export default App;
