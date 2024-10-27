import React, { Component } from 'react'
import './Result.css'

import download from '../../images/download.png'
import milk1 from '../../images/milk1.png'
import milk2 from '../../images/milk2.png'
import milk3 from '../../images/milk3.png'
import milk4 from '../../images/milk4.png'
import milk5 from '../../images/milk5.png'
import milk6 from '../../images/milk6.png'

const Result = () => {
  return (
    <div className="Result_container">
      <div className="flex-col self-stretch">
        <span className="title_2">生成的多视图</span>
        <div className='result-area'>
          <div className="flex-col">
            <div className="group_pic">
              <img
                className="result-image"
                src={milk1}
              />
              <img
                className="result-image"
                src={milk2}
              />
              <img
                className="result-image"
                src={milk3}
              />
            </div>
            <div className="group_pic">
              <img
                className="result-image"
                src={milk4}
              />
              <img
                className="result-image"
                src={milk5}
              />
              <img
                className="result-image"
                src={milk6}
              />
            </div>
          </div>
          <div className="result-button-wrapper">
            <div className="result-button-1">
              <span className="button-font">清空</span>
            </div>
            <div className="result-button-2">
              <span className="button-font">重新绘制</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col self-stretch mt-10">
        <span className="title2">输出模型（OBJ 格式）</span>
        <div className="result-3d-model-wrapper">
          <div className="download-image-wrapper">
            <img
              className="download-image"
              src={download}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
