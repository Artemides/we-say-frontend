import './styles/App.css';
import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import { Main } from './pages/Main';
import { Messages } from './containers/Messages';
import { MessagesPage } from './pages/MessagesPage';
import Login from './pages/Login';
import Signin from './pages/Signin';
import AvatarSeleccion from './pages/AvatarSeleccion';
function App() {
  
  return (
    <Router>
      <Routes>
        <Route exac path='/home' element={ <Main/>}/>
        <Route exac path='/messages' element={ <MessagesPage/>}/>
        <Route exac path='/login' element={<Login/>}/>
        <Route exac path='/signin' element={<Signin/>}/>
        <Route exac path='/avatar' element={<AvatarSeleccion/>}/>
      </Routes>
    </Router>
  );
}

export default App;
