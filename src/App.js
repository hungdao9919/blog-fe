import {BrowserRouter as Router,Routes,Route} from 'react-router-dom' 
import Posts from './pages/Posts'
import ListPosts from './components/ListPosts'
import { PostsProvider } from './context/PostsContext'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'
import PostEditor from './pages/PostEditor'  
import HeaderOnlyLayout from './components/Layouts/HeaderOnlyLayout'
import { PostProvider } from './context/PostContext'
import {PostEditorProvider} from './context/PostEditorContext'
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
                <Posts/>
                </PostEditorProvider>
              </PostsProvider>
            </PostProvider>
          </HeaderOnlyLayout>
          }/> 
          <Route path='/posts' element={
          <HeaderOnlyLayout>
            <PostProvider>
              <PostsProvider>  
              <PostEditorProvider>
                <ListPosts/>
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
