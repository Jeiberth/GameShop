
import React from 'react';
import './cancel.css'
import { useNavigate } from 'react-router-dom';


function Success(){
const navigate = useNavigate()

const handleMainClick = () => {
    navigate('../'); // Navigate to the Register page
  };

return (
    <div id="contp">
    <img id="sf" width="64" height="64" src="https://img.icons8.com/glyph-neue/64/FFFFFF/ok--v1.png" alt="ok--v1"/>
    <h1 id="Acs">Payment Successful</h1>
    <p id="reason">Thank you for your purchase! Your payment has been processed successfully.</p>
    <img onClick={handleMainClick}  id="HP" width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/home-page--v1.png" alt="home-page--v1"/>
    </div>
)
}
export default Success;
