
import React from 'react';
import './ChoosePlan.css';
import PlanCard from './PlanCard';
import { useNavigate } from 'react-router-dom';

const plans = [
    {
     name: 'Premium',
    price: '649',
    quality:'Best',
    resolution:'4k[Ultra HD ]+HDR',
    suppoted:'Tv,Computer,Mobile,Phone,Tablet',
    holddevice:'4',
    download:'6'

    },
  {
    name: 'Standard',
    price: '499',
    quality:'Great',
    resolution:'1080p(FULL HD)',
    suppoted:'Tv,Computer,Mobile,Phone,Tablet',
    holddevice:'2',
    download:'2'
   
  },
  {
    
    name: 'Basic',
    price: '199',
    quality:'Good',
    resolution:'720(HD)',
    suppoted:'Tv,Computer,Mobile,Phone,Tablet',
    holddevice:'1',
    download:'1'
  },
  {
    
    name: 'Mobile',
    price: '149',
    quality:'Fair',
    resolution:'480p',
    suppoted:'Mobile,Phone,Tablet',
    holddevice:'1',
    download:'1'

  },
];

const ChoosePlan = () => {
  const handleSelectPlan = (plan) => {
    console.log(`Selected plan: ${plan.name}`);
  };
  const navigate = useNavigate();
  const handlenext= () => {
    navigate('/loginhome');
  }

  return (
    <div className="choose-plan">
        <h3>Step 4 of 4</h3>
      <h1>Choose the Plan That's Right for You</h1>
      <div className="plan-options">
        {plans.map((plan) => (
          <PlanCard
            key={plan.name}
            name={plan.name}
            price={plan.price}
            quality={plan.quality}
            resolution={plan.resolution}
            suppoted={plan.suppoted}
            holddevice={plan.holddevice}
            download={plan.download}
            onSelect={() => handleSelectPlan(plan)}
          />
        ))}
      </div>
      <button  onClick={handlenext}  type='submit' className='mt-2' style={{backgroundColor:"red", color:'white', width:'50%'}} ><h1>next</h1></button>

    </div>
  );
};

export default ChoosePlan;
