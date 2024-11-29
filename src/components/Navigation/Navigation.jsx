import React, { useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import './Navigation.css'
import menuimage from '../../images/Menu & Fab.png'
import baozhuangOffImage from '../../images/baozhuang_off.png';
import baozhuangOnImage from '../../images/baozhuang_on.png';
import tuanOffImage from '../../images/tuan_off.png';
import tuanOnImage from '../../images/tuan_on.png';
import linganOffImage from '../../images/lingan_off.png';
import linganOnImage from '../../images/linan_on.png';
import mianliaoOffImage from '../../images/mianliao_off.png';
import mianliaoOnImage from '../../images/mianliao_on.png';
import bianjiOffImage from '../../images/bianji_off.png';
import bianjiOnImage from '../../images/bianji_on.png';
import userOnImage from '../../images/User_on.png';
import userOffImage from '../../images/User_off.png';
import { useNavigation } from '../../utils/useNavigation';


const Navigation = () => {
    const location = useLocation();
    const [activeView, setActiveView] = useState(''); // 默认激活视图
    const handleNavigationToAbout = useNavigation();
    {
// const handleNavigationToAbout = (text,index) => {
    //   switch (text) {
    //     case 'Package':
    //         navigate('/Package');
    //         break;
    //     case 'Pattern':
    //         navigate('/Pattern');
    //         break;
    //     case 'Idea':
    //         navigate('/Idea');
    //         break;
    //     case 'Fabric':
    //         navigate('/Fabric');
    //         break;
    //     case 'Editing':
    //         navigate('/Editing');
    //         break;
    //     default:
    //         break;
    //   }

      // const newIndexes = [...activeImageIndexes];
      // if (newIndexes.includes(index)) {
      //   newIndexes.splice(newIndexes.indexOf(index), 1);
      // } else {
      //   newIndexes.push(index);
      // }
      // setActiveImageIndexes(newIndexes);
    // };
    // const handleImageClick = (text, index) => {
    //   handleNavigationToAbout(text); // 使用导航函数
    //   const newIndexes = [...activeImageIndexes];
    //   if (newIndexes.includes(index)) {
    //       newIndexes.splice(newIndexes.indexOf(index), 1);
    //   } else {
    //       newIndexes.push(index);
    //   }
    //   setActiveImageIndexes(text);
    // };
  }
  useEffect(() => {
    switch (location.pathname) {
        case '/Package':
            setActiveView('Package');
            break;
        case '/Pattern':
            setActiveView('Pattern');
            break;
        case '/Idea':
            setActiveView('Idea');
            break;
        case '/Fabric':
            setActiveView('Fabric');
            break;
        case '/Editing':
            setActiveView('Editing');
            break;
        case '/User':
            setActiveView('User');
            break;
        default:
            break;
    }
  }, [location.pathname]);
    
    const handleImageClick = (text) => {
        setActiveView(text); // 更新激活视图
        handleNavigationToAbout(text); // 使用导航函数

    };

    return (
    <div className="navigation_container">
        <img
          className="exit_icon"
          onClick={() => handleNavigationToAbout('Login')}
          src={menuimage}
        />
        <div className="menu_list" 
            onClick={() => handleImageClick('Package')}>
            <img
                className="navigation_image"
                src={activeView==='Package'? baozhuangOnImage : baozhuangOffImage}
            />
            <span className="navigation_front">包装AI</span>
        </div>
        <div className="menu_list"
            onClick={() => handleImageClick('Pattern')}>
            <img
              className="navigation_image"
              src={activeView === 'Pattern' ? tuanOnImage : tuanOffImage}
            />
            <span className="navigation_front">图案AI</span>
        </div>
        <div className="menu_list"
            onClick={() => handleImageClick('Idea')}>
            <img
              className="navigation_image"
              src={activeView === 'Idea' ? linganOnImage : linganOffImage}
            />
            <span className="navigation_front">灵感AI</span>
        </div>
        <div className="menu_list"
            onClick={() => handleImageClick('Fabric')}>
            <img
              className="navigation_image"
              src={activeView === 'Fabric' ? mianliaoOnImage : mianliaoOffImage}
            />
            <span className="navigation_front">面料AI</span>
        </div>
        <div className="menu_list"
            onClick={() => handleImageClick('Editing')}>   
            <img
              className="navigation_image"
              src={activeView === 'Editing' ? bianjiOnImage : bianjiOffImage}
            />
            <span className="navigation_front">编辑AI</span>
        </div>
        <div className="menu_list"
            onClick={() => handleImageClick('User')}>   
            <img
              className="navigation_image"
              src={activeView === 'User' ? userOnImage : userOffImage}
            />
            <span className="navigation_front">个人</span>
        </div>
    </div>
  );
};

export default Navigation;

