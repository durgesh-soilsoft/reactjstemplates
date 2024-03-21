import React from 'react';
import './App.css';

function App() {
  const handleLogin = (socialMedia) => {
    alert(`Logging in with ${socialMedia}`);
  
  };

  return (
    <div className="login-container">
      <div className="logo">
        <img src="/3d-logo-1.png" alt="Logo" />
      </div>
      <h2>Login</h2>
      <form className="login-form">
        <input type="text" placeholder="Username" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <button type="submit" className="login-button">Login</button>
      </form>
      <div className="social-login">
        <button className="social-btn google" onClick={() => handleLogin('Google')}>
          <i className="fab fa-google"></i> Login with Google
        </button>
        <button className="social-btn facebook" onClick={() => handleLogin('Facebook')}>
          <i className="fab fa-facebook"></i> Login with Facebook
        </button>
        <button className="social-btn instagram" onClick={() => handleLogin('Instagram')}>
          <i className="fab fa-instagram"></i> Login with Instagram
        </button>
        <button className="social-btn linkedin" onClick={() => handleLogin('LinkedIn')}>
          <i className="fab fa-linkedin"></i> Login with LinkedIn
        </button>
      </div>
    </div>
  );
}

export default App;
