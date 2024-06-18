import React from 'react'
import image from "../../assets/netflixlogo.png";
import { useNavigate } from 'react-router-dom';
const Nav = () => {
    const navigate = useNavigate();

  const SignHandler = () => {
    navigate('/signin');
  }
  return (
    <div>
       <div className="container d-flex">
          <div>
            <img src={image} alt="no image"></img>
          </div>
          <div className="ms-auto py-4">
            <button type="button" class="btn btn-danger" onClick={SignHandler}>
              Sign In 
            </button>
          </div>
        </div>
    </div>
  )
}

export default Nav
