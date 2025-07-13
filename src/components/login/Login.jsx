import React from 'react'

function Login() {
    const inputStyle = {
    // innerWidth: "12px",
  padding: "12px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  fontSize: "16px",
  outline: "none",
  transition: "border 0.2s",
  backgroundColor: "#8080807a"
  
};

const buttonStyle = {
  padding: "12px",
  backgroundColor: "#007BFF",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  fontSize: "16px",
  cursor: "pointer",
  transition: "background 0.3s ease",
};


  return (
    <div>
    <div style={{
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  // borderRadius: "100px",
//   background: "#f0f4f8"
}} className='bgdiv'>
   <div /*style={{
    width: "400px",
    padding: "40px",
    // background: "#ffffff",
    // backgroundColor: "transparent";
    //  background: "rgba(255, 255, 255, 0.5)", // transparent white
//   backdropFilter: "blur(10px)", // frosted glass effect
//   WebkitBackdropFilter: "blur(10px)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    transition: "all 0.3s ease-in-out"
  }} */ className='bglog'> 
    <h1 style={{ textAlign: "center", color: "#333" }}>Login</h1>
    <input 
      type="text" 
      placeholder="Name" 
      style={inputStyle}
    />
    <input 
      type="email" 
      placeholder="Email ID" 
      style={inputStyle}
    />
    <input 
      type="number" 
      placeholder="Age" 
      style={inputStyle}
    />
    <input 
      type="password"
      placeholder="Password" 
      style={inputStyle}
    />
    <button style={buttonStyle}>Log In</button>
  </div>
</div>

    </div>
  )
}

export default Login
