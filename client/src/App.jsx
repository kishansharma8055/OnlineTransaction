import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import reactLogo from './assets/react.svg'
// import './App.css'
import Navbar from './Navbar';
// import Table from './Table';
import Home from './Home';
import FormPage from './FormPage'
import Form2 from './Form2';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <Table /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/formpage' element={<FormPage />} />
          <Route path='/form2' element={<Form2 />} />
          {/* <Route path='/help' element={<Help />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
