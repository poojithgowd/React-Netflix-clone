import React from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/getstarted');
  }

  return (
    <div>
     <form className="d-flex justify-content-center pb-5 " onSubmit={handleGetStarted}>
            <input
              type="email"
              size={28}
              placeholder="enter mail"
              className="btransparent"
              required
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
