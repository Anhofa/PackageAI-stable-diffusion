import React, { Component } from 'react'
import './Ref.css'
import Upload_pic from '../Upload_pic/Upload_pic'
import Upload_mock from '../Upload_mock/Upload_mock'


import Link from '../../images/Link.png'
import bingan from '../../images/bingan.png'
import juxingdiaopai from '../../images/juxingdiaopai.png'
import fangai from '../../images/fangai.png'
import puke from '../../images/puke.png'
import shoutidai from '../../images/shoutidai.png'
import dangaohe from '../../images/dangaohe.png'
import gouwudai from '../../images/gouwudai.png'
import zhibei from '../../images/zhibei.png'

const Ref = () => {
    return (
        <div className="Ref_container">
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
                <span className="color-change-title">包装模型</span>
                <div className="pic_list">
                    <div className="flex-row">
                        <div className='row1'>
                            <img
                            className="pic_image"
                            src={bingan}
                            />
                            <span className="row_font">饼干蛋糕铝罐</span>
                        </div>
                        <div className='row2'>
                            <img
                            className="pic_image"
                            src={juxingdiaopai}
                            />
                            <span className="row_font">矩形吊牌</span>
                        </div>
                        <div className='row2'>
                            <img
                            className="pic_image"
                            src={fangai}
                            />
                            <span className="row_font">披萨翻盖盒</span>
                        </div>
                    </div>
                    <div className="flex-row">
                        <div className='row1'>
                            <img
                            className="pic_image"
                            src={puke}
                            />
                            <span className="row_font">扑克牌卡盒</span>
                        </div>
                        <div className='row2'>
                            <img
                            className="pic_image"
                            src={shoutidai}
                            />
                            <span className="row_font">手提袋</span>
                        </div>
                        <div className='row2'>
                            <img
                            className="pic_image"
                            src={dangaohe}
                            />
                            <span className="row_font">手提蛋糕盒</span>
                        </div>
                    </div>
                    <div className="flex-row">
                        <div className='row1'>
                            <img
                            className="pic_image"
                            src={gouwudai}
                            />
                            <span className="row_font">手提购物袋</span>
                        </div>
                        <div className='row2'>
                            <img
                            className="pic_image"
                            src={fangai}
                            />
                            <span className="row_font">锁底翻盖盒</span>
                        </div>
                        <div className='row2'>
                            <img
                            className="pic_image"
                            src={zhibei}
                            />
                            <span className="row_font">一次性纸杯</span>
                        </div>
                    </div>
                    <div className="flex-row">
                        <div className='row1'>
                            <img
                            className="pic_image"
                            src={bingan}
                            />
                            <span className="row_font">饼干蛋糕铝罐</span>
                        </div>
                        <div className='row2'>
                            <img
                            className="pic_image"
                            src={juxingdiaopai}
                            />
                            <span className="row_font">矩形吊牌</span>
                        </div>
                        <div className='row2'>
                            <img
                            className="pic_image"
                            src={fangai}
                            />
                            <span className="row_font">披萨翻盖盒</span>
                        </div>
                    </div>
                </div>
            </div>
            
      </div>
    );
};

export default Ref;
