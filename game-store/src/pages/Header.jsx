import React from 'react';
import './header.css';
function Header({ toggleActive }) {
  return (
    <header>
        <a href="#" className="menu" onClick={toggleActive}>
          <i class="bi bi-sliders2"></i>
        </a>
        <div className="userItems">
            <a href="#" className="icon">
              <i className="bi bi-heart-fill"></i>
              <span className="like">0</span>
            </a>
            <a href="#" className="icon">
              <i className="bi bi-cart-fill"></i>
              <span className="cart">0</span>
            </a>
            <div className="login">
                <button>
                    Login
                </button>
            </div>

        </div>
    </header>
  )
}

export default Header