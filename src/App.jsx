

import { Route,Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Histroy from './pages/Histroy'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  

  return (
   <>
   {/* path for landing ,history ,home */}
   {/* HEADER */}
   <Header/>
   <Routes>
    <Route path='/' element ={<Landing/>}/>
    <Route path ='/home' element={<Home/>}/>
    <Route path ='/history' element={<Histroy/>}/>
   </Routes>
{/* FOOTER */}
<Footer/>


   </>
  )
}

export default App
