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
function App() { 

  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path='/' element={
          <HeaderOnlyLayout>
            <PostProvider>
              <PostsProvider>
                <Posts/>
              </PostsProvider>
            </PostProvider>
          </HeaderOnlyLayout>
          }/> 
          <Route path='/posts' element={
          <HeaderOnlyLayout>
            <PostProvider>
              <PostsProvider>
                <ListPosts/>
              </PostsProvider>
            </PostProvider>
          </HeaderOnlyLayout>
          }/>
          {/* <Route path='/posts/:id' element={<DefaultLayout><PostDetail/></DefaultLayout>}/> */}
          <Route path='/profile' element={<HeaderOnlyLayout><PostProvider><Profile/></PostProvider></HeaderOnlyLayout>}/>
          <Route path='/login' element={<HeaderOnlyLayout><Login/></HeaderOnlyLayout>}/>
          <Route path='/register' element={<HeaderOnlyLayout><Register/></HeaderOnlyLayout>}/>
          <Route path='/editor' element={<HeaderOnlyLayout><PostEditor/></HeaderOnlyLayout>}/>  
        </Routes>
      </div>
    </Router>
  );
}

export default App;
