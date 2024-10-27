import React, { Component } from 'react'
import './Color_change.css'
import Color_Picker from '../../images/Color Picker.png'
import Upload_pic from '../Upload_pic/Upload_pic'

export default class Color_change extends Component {
  render() {
    return (
      <div className='color-change-container'>
        <div className="color-change-content">
            <span className="color-change-title">图片/视频参考</span>
            <div className="group_upload">
                <Upload_pic />
            </div>
           
            <div className="color-change-picker">
                <span className="color-change-title">Color</span>
                <img
                className="shrink-0 mt-10"
                src={Color_Picker}
                />
            </div>
        </div>
      </div>
    )
  }
}
