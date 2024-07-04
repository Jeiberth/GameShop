
import React from 'react';
import './cancel.css'

import { useNavigate } from 'react-router-dom';


function Cancel(){
const navigate = useNavigate()

const handleMainClick = () => {
    navigate('../'); // Navigate to the Register page
  };
return (
    <div id="contp">
    <img id="sf" width="24" height="24" src="https://img.icons8.com/material-sharp/24/FFFFFF/cancel--v1.png" alt="cancel--v1"/>
    <h1 id="Acs">Payment Cancelled</h1>
    <p id="reason">Your payment has been cancelled. Try again later.</p>
    <img onClick={handleMainClick}  id="HP" width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/home-page--v1.png" alt="home-page--v1"/>
    </div>
);
};

export default Cancel;
