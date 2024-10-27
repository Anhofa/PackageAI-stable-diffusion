import React from 'react'
import Upload_pic from '../Upload_pic/Upload_pic'
import Upload_mock from '../Upload_mock/Upload_mock'
import './Text_change.css'

export default function Text_change() {
  return (
    <div className='color-change-container'>
        <div className="color-change-content">
            <span className="color-change-title">提示词描述</span>
            <input type="text" className="tishiarea tishifont "
            placeholder="请输入提示词描述"
            />
            <span className="color-change-title">图片/视频参考</span>
            <div className="group_upload">
                <Upload_pic />
                <Upload_mock />
            </div>
        </div>
    </div>
  )
}
