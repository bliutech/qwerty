import './App.css';
import RegisterMod from './components/RegisterMod.js'
import LoginMod from './components/LoginMod.js'
import Forms from './components/Forms.js'
import ResultMod from './components/ResultMod.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className='general'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/login' element={ <Login /> }/>
          <Route path='/register' element={ <Register /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
