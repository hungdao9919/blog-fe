import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import PostDetail from './pages/Posts'
import Profile from './pages/Profile'
import Login from './pages/Login'
import PostEditor from './components/PostEditor'
import DefaultLayout from './components/Layouts/DefaultLayout'
import HeaderOnlyLayout from './components/Layouts/HeaderOnlyLayout'
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<DefaultLayout><Home/></DefaultLayout>}/>
          <Route path='/posts' element={<DefaultLayout><PostDetail/></DefaultLayout>}/>
          <Route path='/profile' element={<HeaderOnlyLayout><Profile/></HeaderOnlyLayout>}/>
          <Route path='/login' element={<HeaderOnlyLayout><Login/></HeaderOnlyLayout>}/>
          <Route path='/editor' element={<HeaderOnlyLayout><PostEditor/></HeaderOnlyLayout>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;