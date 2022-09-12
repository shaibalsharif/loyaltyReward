import './App.css';
import Header from './components/Header';

import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import Admin from './components/Admin';
function App() {


  return (
    <Router>
    <div className="App bg-gray-500 text-white ">
      <Header/>
      <Routes>
      <Route exact path='/' element={<Login/>} />
      <Route exact path='/login' element={<Login/>} />
      <Route exact path='/register' element={<Register/>} />
      <Route exact path='/dashboard' element={<Dashboard/>} />
      <Route exact path='/admin' element={<Admin/>} />
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
