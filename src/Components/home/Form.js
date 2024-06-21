import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Form = () => {
 
  
  
  const navigate = useNavigate();

  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

   
      const response = await axios.get('https://6650db4720f4f4c442765707.mockapi.io/crud');
      const users = response.data;
      const user = users.find((e) => e.email === email);

      if (user) {
        navigate('/signin');
      } else {
        navigate('/getstarted')
      }
      var mail=email
      sessionStorage.setItem("mailid",mail)
     console.log(sessionStorage.getItem('mailid'))
  };
  return (
    <div>
     <form className="d-flex justify-content-center pb-5 " onSubmit={handleSubmit}>
            <input
              type="email"
              size={28}
              placeholder="enter mail"
              className="btransparent"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              

            />
          
            &nbsp;
            <button type="submit" class="btn btn-danger">
              Get Started&nbsp;&gt;
             </button>
          </form>
    </div>
  );
};

export default Form;
