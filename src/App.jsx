import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <>
      <HashRouter>
        <Navbar />
        <div className='bg-transparent py-[2.4rem]'></div>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
