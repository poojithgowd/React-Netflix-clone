import React from 'react'
import image from "../../assets/netflixlogo.png";
import { useNavigate } from 'react-router-dom';


const CreateAcc = () => {
  const navigate = useNavigate();

  const handlenext= () => {
    navigate('/chooseurplan');
  }
  return (
    <div>
      <div className="container d-flex mt-3">
          <div>
            <img src={image} alt="no image"></img>
          </div>
          <div className="ms-auto py-4">
            <button type="button" class="btn btn-danger">
              Sign In 
            </button>
          </div>
        </div>
        <div className='accdiv mt-5' style={{width:"40%"}}>
        <h6 className='d-flex justify-content-center mt-3'>STEP 2 OF 4</h6>
        <h1 className='d-flex justify-content-center mt-3'>Create a password to start Your membership</h1>
        <h3 className='d-flex justify-content-center mt-3'>just a few more steps and you're done!</h3>
        <h3 className='d-flex justify-content-center mt-3'>We hate paperwork,too.</h3>
        <form action="" onSubmit={handlenext}>
        <input type="mail" placeholder='Email' required className='mt-3' style={{width:'80%', height:'50px'}}/><br/>
        <input type='password' placeholder='Add a password' required className='mt-3' style={{width:'80%', height:'50px'}}/><br/>
        <button type='submit' className='mt-2' style={{backgroundColor:"red", color:'white', width:'80%'}} ><h1>next</h1></button>
        </form>
            
        </div>

    </div>
  )
}

export default CreateAcc
