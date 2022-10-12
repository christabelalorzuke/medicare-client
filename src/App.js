import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './components/hompage_components/Hompage';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
