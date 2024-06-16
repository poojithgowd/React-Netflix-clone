// src/components/PlanCard.js
import React from "react";
import "./PlanCard.css";

const PlanCard = ({ name, price, quality,resolution,suppoted,holddevice,download, onSelect }) => {
  return (
    <div className="plan-card" onClick={onSelect}>
      <h3>{name}</h3><hr/>
      <p className="plan-price">Monthly price <br />${price}</p><hr/>
      <p className="plan-price">Vedio and sound Quality<br/>{quality}</p><hr/>
      <p className="plan-price">Resolution<br/>{resolution}</p><hr/>
      <p className="plan-price">Supported devices<br/>{suppoted}</p><hr/>
      <p className="plan-price">Devices Your household can<br/> watch at the same time<br/>{holddevice}</p><hr/>
      <p className="plan-price">Download devices<br/>{download}</p>
 
    </div>
  );
};
export default PlanCard;
