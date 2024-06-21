import React, { useEffect, useState } from 'react'
import image from "../../assets/netflixlogo.png";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const SigIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [isEmailChecked, setIsEmailChecked] = useState(false);

  const handlesigin = (event) => {
    event.preventDefault();

    axios.get('https://6650db4720f4f4c442765707.mockapi.io/crud')
    .then(response => {
      // console.log(response)
      // console.log(response.data)
      const users = response.data;
      // console.log(users)
      const user = users.find((user) => user.email === email);
      // console.log(user)
      if (user && user.password === password) {
        navigate('/loginhome')
      } 
      else{
        alert("ur password and user name is missmatched")
        navigate('/sigin')
      } })
     
      
  };
  useEffect(()=>{
    setEmail(sessionStorage.getItem("mailid"))
  
  },[])
 
  return (
    <div id="SignIn">
         <div className="bg container-fluid">
            <img src={image} width={200} className='mt-2'/>
             <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'90vh',color:'white'}}>
                <div style={{backgroundColor:'rgba(5,5,5,0.816)',borderRadius:'10px',width:'25rem'}} className='p-5'>
                
                <input type='email' className='form-control mb-3' value={email}  onChange={(e) => setEmail(e.target.value)} required></input>
                <input type ='password'className="form-control mb-3"  value={password} onChange={(e) => setPassword(e.target.value)} required></input>    
                <button  className='form-control mb-3 btn btn-danger' onClick={handlesigin}>SignIn</button>  
                <p style={{textAlign:'center'}}>or</p>    
                <button  className='form-control mb-3 btn btn-dark'>Use a sign-in code</button>  
               <span  style={{textAlign:'center'}}> <a href=''>Forgot password?</a></span><br/>
                <input type='checkbox'></input><span>Remember me</span>
                <p>New to Netflix? <b><a href='src/Components/home/Getstarted.js'>Sign up now</a></b></p>
                <small>This page is protected by Google reCAPTCHA to ensure you're not a bot<a href='' style={{color:'blue',textDecoration:'none'}}>Learn more</a></small>
                </div>
                </div>
            
            </div>
        </div>
  )
}

export default SigIn;

