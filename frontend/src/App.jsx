import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
const App = () => {
  return (
    <div className='px-4sm:px-[5vw] md:px-[7vw] 1g:px-[9vw]'>
      <Routes>
        <Route path='/' element={Home}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route  path='/about' element={<About/>}/>
        <Route path='/contact' elment={<Contact/>}/>
        <Route path='/product/:productId' element={<Product/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/place-order' element={<PlaceOrder/>} />
      </Routes>
    </div>
    
  )
}

export default App