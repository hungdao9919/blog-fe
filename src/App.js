import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Posts from './pages/Posts'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'
import PostEditor from './pages/PostEditor' 
import DefaultLayout from './components/Layouts/DefaultLayout'
import HeaderOnlyLayout from './components/Layouts/HeaderOnlyLayout'
import { PostsProvider } from './context/PostsContext'
function App() { 

  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path='/' element={<HeaderOnlyLayout><Home/></HeaderOnlyLayout>}/>
          <Route path='/posts' element={<HeaderOnlyLayout><PostsProvider><Posts/></PostsProvider></HeaderOnlyLayout>}/>
          {/* <Route path='/posts/:id' element={<DefaultLayout><PostDetail/></DefaultLayout>}/> */}
          <Route path='/profile' element={<HeaderOnlyLayout><Profile/></HeaderOnlyLayout>}/>
          <Route path='/login' element={<HeaderOnlyLayout><Login/></HeaderOnlyLayout>}/>
          <Route path='/register' element={<HeaderOnlyLayout><Register/></HeaderOnlyLayout>}/>
          <Route path='/editor' element={<HeaderOnlyLayout><PostEditor/></HeaderOnlyLayout>}/>  
        </Routes>
      </div>
    </Router>
  );
}

export default App;
