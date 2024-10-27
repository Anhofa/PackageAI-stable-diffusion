import React, { useState } from 'react';
import './Ref.css';
import Color_change from '../Ref_Color_change/Color_change';
import Area_change from '../Ref_Area_change/Area_change';
import Text_change from '../Ref_Text_change/Text_change';
import Reference_change from '../Ref_Reference_change/Reference_change';

const Ref = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className='pattern-ref-container'>
        <div className="tabs-fillet-corner">
        {[
            { text: '一键换色' },
            { text: '区域换色' },
            { text: '文本换色' },
            { text: '参考换色' },
            ].map((item, index) => (
            <div
            key={index}
            className={`tabs-fillet-corner-item-wrap ${
                activeTab === index? 'tabs-fillet-corner-item-active-wrap' : ''
            }`}
            onClick={() => handleTabClick(index)}
            >
                <div className={`tabs-fillet-corner-item ${activeTab === index? 'tabs-fillet-corner-item-active' : ''}`}>
                    <p className="tabs-fillet-corner-item-text">{item.text}</p>
                </div>
            </div>
            ))}
        </div>
        <div className='tabs-fillet-content'>
            {(() => {
            switch (activeTab) {
                case 0:
                return <div><Color_change /></div>;
                case 1:
                return <div><Area_change /></div>;
                case 2:
                return <div><Text_change /></div>;
                case 3:
                return <div><Reference_change /></div>;
                default:
                return null;
            }
            })()}
        </div>
    </div>
);
};

export default Ref;