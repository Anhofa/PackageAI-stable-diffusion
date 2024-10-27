import React from 'react'
import Link from '../../images/Link.png'
import './Upload_pic.css'

export default function Upload_pic() {
  return (
    <div className="section_upload">
        <img
        className="shrink-0"
        src={Link}
        />
        <span className="tishifont upload_font">上传图片或者视频</span>
    </div>
  )
}
