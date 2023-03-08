import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import PostDetail from './pages/Posts'
import Profile from './pages/Profile'
import DefaultLayout from './components/Layouts/DefaultLayout'
import ProfileLayout from './components/Layouts/ProfileLayout'
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<DefaultLayout><Home/></DefaultLayout>}/>
          <Route path='/posts' element={<DefaultLayout><PostDetail/></DefaultLayout>}/>
          <Route path='/profile' element={<ProfileLayout><Profile/></ProfileLayout>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
