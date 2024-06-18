import React, { useState } from 'react'
import image from "../../assets/netflixlogo.png";
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';
import axios from 'axios';


const CreateAcc = () => {
// console.log(sessionStorage.getItem(mail))
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
   
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState();

  const handlenext = async (event) => {
    event.preventDefault();

  
      const response = await axios.post('https://6650db4720f4f4c442765707.mockapi.io/crud', {
        email,
        password,
      });

      setResponse(response.data);
      navigate('/chooseurplan');
    }
  return (
    <div>
      <Nav/>
        <div className='accdiv mt-5' style={{width:"40%"}}>
        <h6 className='d-flex justify-content-center mt-3'>STEP 2 OF 4</h6>
        <h1 className='d-flex justify-content-center mt-3'>Create a password to start Your membership</h1>
        <h3 className='d-flex justify-content-center mt-3'>just a few more steps and you're done!</h3>
        <h3 className='d-flex justify-content-center mt-3'>We hate paperwork,too.</h3>
        <form action="" onSubmit={handlenext}>
        <input type="mail"  required className='mt-3' style={{width:'80%', height:'50px'}} value={email}  onChange={(e) => setEmail(e.target.value)}/><br/>
        <input type='password' placeholder='Add a password' required className='mt-3' style={{width:'80%', height:'50px'}} value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
        <button type='submit' className='mt-2' style={{backgroundColor:"red", color:'white', width:'80%'}}><h1>next</h1></button>
        </form>
            
        </div>

    </div>
  )
}

export default CreateAcc
