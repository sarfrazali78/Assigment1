import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from './Components/Buy/Buy'
import Watchlist from './Components/Rent/Rent';

import Navbar from './Components/Navbar/Navbar';



function App() {
  return (
    <div className="App">
     
     <BrowserRouter>

     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Watchlist'   element={<> <Navbar/> <Watchlist/></>}/>

     
      
      
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
