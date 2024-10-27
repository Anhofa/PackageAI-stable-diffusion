import React, { useState } from 'react';
import '../../App.css'
import Navigation from '../../components/Navigation/Navigation';
import Ref from '../../components/Pattern_Ref/Ref'
import Result from '../../components/Result/Result'
import logo from '../../images/logo.png'

export default function Fabric() {
  return (
    <div className="page">
      <Navigation />
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
