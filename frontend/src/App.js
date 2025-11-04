import {BrowserRouter,Route,Routes} from 'react-router-dom'
import SignupRoute from './components/SignupRoute';
import LoginRoute from './components/LoginRoute';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './components/HomeRoute';



const App =()=>{

  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/signup" element={<SignupRoute/>}/>
      <Route exact path="/login" element={<LoginRoute/>}/>
      <Route exact path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
      

    </Routes>
    </BrowserRouter>
  )
  
}

export default App;