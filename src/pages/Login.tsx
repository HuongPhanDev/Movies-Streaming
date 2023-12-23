import React, { useState } from 'react'
import '../styles/Login.css'
import { authorize, getSessionId, requestToken } from '../api/Api';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { LoginContext } from '../App';

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();
  const { setIsLoggedIn } = useContext(LoginContext)!; 


  const fetchData = async () => {
    try {
      const tokenResponse = await requestToken("https://api.themoviedb.org/3/authentication/token/new?api_key=e625e669aa1fa4c29e259bda1eae49a7");

      await authorize(
        "https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=e625e669aa1fa4c29e259bda1eae49a7",
        username,
        password,
        tokenResponse.request_token
      );

      const sessionIdResponse = await getSessionId("https://api.themoviedb.org/3/authentication/session/new?api_key=e625e669aa1fa4c29e259bda1eae49a7&request_token=" + tokenResponse.request_token);
      console.log("Session ID Response:", sessionIdResponse);
      if (sessionIdResponse.success) {
        const userInformation = {
          username, 
          request_token: tokenResponse.request_token,
        };
        sessionStorage.setItem('user_info', JSON.stringify(userInformation));
        setIsLoggedIn(true);
        alert("Bạn đã đăng nhập thành công!")
        navigation('/');
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleLogin = async () => {
    fetchData();
  }
  return (
    <div className='loginContainer'>
      
      <form action="" method="post">
        <h3>Login to Movie Dream</h3>
        <input 
          type="text" 
          placeholder='User name' 
          id="username"
          value={username} 
          onChange={(e) => setUsername(e.target.value)} />

        <input 
          type="text" 
          placeholder='Password'
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />

        <input type="button" value="Login" onClick={handleLogin} />
      </form>

    </div>
  )
}
