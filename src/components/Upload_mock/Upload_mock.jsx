import React from 'react'
import Link from '../../images/Link.png'
import './Upload_mock.css'

export default function Upload_mock() {
  return (
    <div className="section_upload2">
        <img
        className="image_link"
        src={Link}
        />
        <span className="tishifont upload_font">上传图片蒙版</span>
    </div>
  )
}
