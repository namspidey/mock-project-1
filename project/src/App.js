import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import { Route, Routes, Link, NavLink, Navigate } from 'react-router-dom'

function App() {


  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>


          
        </Routes>
        
    </div>
  );
}

export default App;
