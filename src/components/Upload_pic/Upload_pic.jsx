import React from 'react'
import Link from '../../images/Link.png'
import './Upload_pic.css'

export default function Upload_pic() {
  return (
    <form action="upload" method="post" enctype="multipart/form-data" className="upload_section_upload">
        <div className="upload_section_upload_box">
          {/* <img
          className="shrink-0"
          src={Link}
          /> */}
          <input type="file" name="file"/>
        </div>
        <div className="upload_section_upload_box">
          <input type="submit" value="上传"/>
          <span className="tishifont upload_font">上传图片或者视频</span>
        </div>
        
    </form>
  )
}
