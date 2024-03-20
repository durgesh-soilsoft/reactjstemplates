import React, {useState} from 'react';
import './App.css';


const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSendOtp = () => {
    // Send OTP logic goes here (e.g., API call to send OTP to phoneNumber)
    // For simplicity, just logging the OTP for demonstration
    if(!phoneNumber.trim()){
      alert("Please Enter Mobile number");
      return;
    }
    const generatedOtp = Math.floor(1000 + Math.random() * 9000);
    console.log('OTP sent:', generatedOtp);
    setOtpSent(true);
  };

  const handleLogin = () => {
    // Login logic goes here (e.g., API call to verify OTP)
    // For simplicity, just logging the success message
    console.log('Login successful!');
  };
  return (
    <div>
      <div className='bg-box'>
      <h1>Welcome back!</h1>
      <h3>Login to Continue</h3>
      <div className='linedecoration1'></div>
      <div className='linedecoration2'></div>
      <p className='signup'>New User? <a href='/signup'>Create New Account</a></p>
      <div className='phonenum'>
        {/* <label htmlFor="phone">Phone Number:</label><br></br> */}
        <input type="text" placeholder='Enter Mobile Number' id="phone"  value={phoneNumber} onChange={handlePhoneNumberChange} />
        </div>
      {!otpSent ? (
        <button className='sendotpbtn'  onClick={handleSendOtp}>Request OTP</button>
      ) : (
        <div className='otplabel'>
          {/* <label htmlFor="otp">Enter OTP:</label><br></br> */}
          <input type="text" id="otp" placeholder='Enter OTP' value={otp} onChange={handleOtpChange} /><br></br>
          <p> By Continuing, you agree to our's <span><a href='/terms'>Terms & Conditions</a></span> and <a href='/privacy'>Privacy Policy</a></p>
          <button className='sumbitotpbtn'  onClick={handleLogin}>Submit OTP</button>
        </div>
      )}
    </div>
    {/* <p className='signup'>New User? Create New Account</p> */}
    </div>
  );
};


export default Login;
