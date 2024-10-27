import React, { useState } from 'react'
import './Navigation.css'
import { useNavigate } from 'react-router-dom'
import menuimage from '../../images/Menu & Fab.png'
import baozhuangOffImage from '../../images/baozhuang_off.png';
import baozhuangOnImage from '../../images/baozhuang_on.png';
import tuanOffImage from '../../images/tuan_off.png';
import tuanOnImage from '../../images/tuan_on.png';
import linganOffImage from '../../images/lingan_off.png';
import mianliaoOffImage from '../../images/mianliao_off.png';
import bianjiOffImage from '../../images/bianji_off.png';



const Navigation = () => {
    const navigate = useNavigate();
    const [activeImageIndexes, setActiveImageIndexes] = useState([]);
    const handleNavigationToAbout = (text,index) => {
      switch (text) {
        case 'Package':
            navigate('/Package');
            break;
        case 'Pattern':
            navigate('/Pattern');
            break;
        case 'Idea':
            navigate('/Idea');
            break;
        case 'Fabric':
            navigate('/Fabric');
            break;
        case 'Editing':
            navigate('/Editing');
            break;
        default:
            break;
      }

      const newIndexes = [...activeImageIndexes];
      if (newIndexes.includes(index)) {
        newIndexes.splice(newIndexes.indexOf(index), 1);
      } else {
        newIndexes.push(index);
      }
      setActiveImageIndexes(newIndexes);
    };

    return (
    <div className="navigation_container">
        <img
          className="exit_icon"
          src={menuimage}
        />
        <div className="menu_list" 
            onClick={() => handleNavigationToAbout('Package',0)}>
            <img
                className="navigation_image"
                // src={baozhuangOffImage}
                src={activeImageIndexes.includes(0)? baozhuangOnImage : baozhuangOffImage}
            />
            <span className="navigation_front">包装AI</span>
        </div>
        <div className="menu_list"
            onClick={() => handleNavigationToAbout('Pattern')}>
            <img
              className="navigation_image"
              src={tuanOffImage}
            />
            <span className="navigation_front">图案AI</span>
        </div>
        <div className="menu_list"
            onClick={() => handleNavigationToAbout('Idea')}>
            <img
              className="navigation_image"
              src={linganOffImage}
            />
            <span className="navigation_front">灵感AI</span>
        </div>
        <div className="menu_list"
            onClick={() => handleNavigationToAbout('Fabric')}>
            <img
              className="navigation_image"
              src={mianliaoOffImage}
            />
            <span className="navigation_front">面料AI</span>
        </div>
        <div className="menu_list"
            onClick={() => handleNavigationToAbout('Editing')}>   
            <img
              className="navigation_image"
              src={bianjiOffImage}
            />
            <span className="navigation_front">编辑AI</span>
        </div>
    </div>
  );
};

export default Navigation;

