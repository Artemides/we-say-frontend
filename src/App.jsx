import './styles/App.css';
import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import { Main } from './pages/Main';
import { Messages } from './containers/Messages';
import { MessagesPage } from './pages/MessagesPage';
import Login from './pages/Login';
function App() {
  
  return (
    <Router>
      <Routes>
        <Route exac path='/home' element={ <Main/>}/>
        <Route exac path='/messages' element={ <MessagesPage/>}/>
        <Route exac path='/login' element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
