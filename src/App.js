import {Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Account from '.pages/Account'

function App() {
  return (
   <Header/>
   <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='Account' element={<Account/>} />
   
   </Routes>
  );
}

export default App;
