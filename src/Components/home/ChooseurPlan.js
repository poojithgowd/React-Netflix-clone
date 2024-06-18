import React from 'react'
import image from "../../assets/netflixlogo.png";
import tick from '../../assets/tick.png'
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';
const ChooseurPlan = () => {
  const navigate = useNavigate();
  const handlenext= () => {
    navigate('/select');
  }
  return (
    <div>
     <Nav/>
        <div className='accdiv mt-5' style={{width:"40%"}}>
        <img src={tick} alt="setimage" className='accima'  ></img>
        <h6 className='d-flex justify-content-center mt-3'>STEP 3 OF 4</h6>
        <h1><strong>Choose your plan</strong></h1>
        <h6>
        <ul class="red-tick">
          <li className='mt-3'>No commitments, cancel anytime.</li>
          <li className='mt-3'>Evetything on Netflix for one low price</li>
          <li className='mt-3'>No ads and no extra fees.Everr</li>
        </ul></h6>
        <button  onClick={handlenext}  type='submit' className='mt-2' style={{backgroundColor:"red", color:'white', width:'50%'}} ><h1>next</h1></button>


       
        </div>
    </div>
  )
}

export default ChooseurPlan
