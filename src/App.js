import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import CurrentLoc from './Components/CurrentLoc';
import OtherCity from './Components/OtherCity';

function App() {
  console.log('Make Sure You Allow all the Permissions')
  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center flex-col" style={{backgroundImage:'url(https://cdn.dribbble.com/users/1595839/screenshots/11700339/media/5b39c07a6a721b6b440288c6c6ec5cb1.gif)',backgroundRepeat:'no-repeat',backgroundSize:'100% 100vh'}}>
      
    <BrowserRouter>
   <Routes>
<Route path='/' element={<CurrentLoc/>}/>
<Route path='/Other' element={<OtherCity/>}/>

   </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
