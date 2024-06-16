import React from 'react'
import Home from './Components/home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Getstarted from './Components/home/Getstarted'
import CreateAcc from './Components/home/CreateAcc'
import ChooseurPlan from './Components/home/ChooseurPlan'
// import Selectamount from './Components/home/Selectamount'
import ChoosePlan from './Components/home/ChoosePlan'
import Payment from './Components/home/Payment'

const App = () => {
  return (
    <div>
   
      <BrowserRouter>
                <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/getstarted" element={<Getstarted/>} />
                <Route path="/createaccount" element={<CreateAcc/>} />
                <Route path="/chooseurplan" element={<ChooseurPlan/>} />
                <Route path="/select" element={<ChoosePlan/>} />
                <Route path='/payment' element={<Payment/>}/>



                </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App
