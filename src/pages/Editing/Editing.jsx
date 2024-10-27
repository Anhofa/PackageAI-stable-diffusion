import React, { Component } from 'react'
import './Editing.css'
import Navigation from '../../components/Navigation/Navigation';
import logo from '../../images/logo.png'
import download from '../../images/download.png'
import Upload_pic from '../../components/Upload_pic/Upload_pic'

export default function Editing() {
  return (
    <div className="page">
      <Navigation/>
      <div className="left_group flex-1">
        <img
          className="logo_image"
          src={logo}
        />
        <div className="editing-container">
          <div className="upload-container">
            <div className="flex-col">
              <span className="color-change-title">图片上传</span>
              <div className="group_upload">
                <Upload_pic />
              </div>
            </div>
            <div className="flex-row self-start">
              <div className="result-button-1 mt-20">
                <span className="button-font">清空</span>
              </div>
              <div className="result-button-2 mt-20 ml-10">
                <span className="button-font">重新绘制</span>
              </div>
            </div>
          </div>
          <div className="result-container">
            <div className='result-pic'>
              <span className="color-change-title">原图</span>
              <div className="pic-uploader">
              </div>
            </div>
            <div className='result-pic ml-20'>
              <span className="color-change-title">结果图</span>
              <div className="pic-uploader">
                <img
                  className="download-image"
                  src={download}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
