import React from 'react'
import accsetup from '../../assets/accsetup.png'
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';
const Getstarted = () => {
  const navigate = useNavigate();

  const handlenext= () => {
    navigate('/createaccount');
  }
 
  return (
    <div>
     <Nav/>
        <div className='accdiv mt-5' style={{width:"30%"}}>
          <img src={accsetup} alt="setimage" className='accima' width="100%" ></img>
          <h6 className='d-flex justify-content-center mt-3'>STEP 1 OF 4</h6>
          <h1 className='d-flex justify-content-center mt-3  '><strong>Finish setting up your account</strong></h1>
          <h5 className='d-flex justify-content-center mt-3'>Netflix is personalised for you.</h5>
          <h5 className='d-flex justify-content-center mt-2'>Create a password to Watch on any device at any time</h5>
          <button  style={{backgroundColor:"red", color:'white', width:'100%'}} className='mt-2 p-2' onClick={handlenext}><h3>Next</h3></button>
        </div>
      
    </div>
  )
}

export default Getstarted
