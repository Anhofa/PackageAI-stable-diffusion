import React, { Component } from 'react'
import '../../App.css'
import Navigation from '../../components/Navigation/Navigation';
import Ref from '../../components/Package_Ref/Ref'
import Result from '../../components/Result/Result'
import logo from '../../images/logo.png'
import { jwtDecode } from 'jwt-decode';

// const SECRET_KEY = 'your_secret_key'; // 确保与 AuthContext.js 中的密钥一致


const Package = () => {
  const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    if (!token) return false;
    try {
        const decoded = jwtDecode(token);
        // 检查 token 是否过期
        if (decoded.exp * 1000 < Date.now()) {
            return false;
        }
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
  };


  if (!isAuthenticated()) {
      return <div>请先登录!</div>;
  }

  return (
    <div className="page">
      <Navigation/>
      <div className="left_group flex-1">
        <img
          className="logo_image"
          src={logo}
        />
        <div className="left_left_group">
          <Ref />
          <Result />
        </div>
      </div>
    </div>
  )
}

export default Package