import './App.css';
import Results from './components/ResultMod.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NavBar from "./components/NavBar.js";
import "./App.css"

function App() {
  return (
    <div className='general'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/login' element={ <Login /> }/>
          <Route path='/register' element={ <Register /> }/>
          <Route path='/results' element={ <Results />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
