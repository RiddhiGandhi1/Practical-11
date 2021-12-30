import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './component/register';
import Login from './component/login';
import Home from './component/home';

function App() {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
