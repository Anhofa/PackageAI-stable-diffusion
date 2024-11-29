import React, { useState, useEffect, useRef } from 'react';
import './User.css';
import Navigation from '../../components/Navigation/Navigation';
import logo from '../../images/logo.png';
import person from '../../images/person.jpg';
import mockImages from '../../mocks/mockData';
import edit from '../../images/Edit.png'; // 你可以替换成你自己的链接图标

export default function User() {
  const [email, setEmail] = useState('@anhofa.com');
  const [phone, setPhone] = useState('909 999 999');
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPhone, setIsEditingPhone] = useState(false);

  const [visibleImages, setVisibleImages] = useState([]); // 当前可见的图像
  const [isBatchLoading, setIsBatchLoading] = useState(true); // 是否分批加载
  const [currentCount, setCurrentCount] = useState(6); // 每次加载的图像数量

  const observer = useRef();

  // 加载更多图片
  const loadMoreImages = () => {
    if (isBatchLoading) {
      setVisibleImages((prev) => [
        ...prev,
        ...mockImages.slice(prev.length, prev.length + currentCount),
      ]);
      console.log("分批加载 - 当前可见图像数量:", visibleImages.length + currentCount);
    } else {
      setVisibleImages(mockImages); // 一次性加载所有图片
      console.log("一次性加载所有图片");
    }
  };

  useEffect(() => {
    // 初始加载少量图像
    if (isBatchLoading) {
      loadMoreImages();
    } else {
      setVisibleImages(mockImages);
    }
  }, [isBatchLoading]);

  useEffect(() => {
    if (!isBatchLoading || visibleImages.length >= mockImages.length) return;

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadMoreImages(); // 加载更多
        }
      });
    }, options);

    const lastImageRef = document.querySelector('.gallery-image:last-child');
    if (lastImageRef) {
      observer.current.observe(lastImageRef);
    }

    return () => {
      if (lastImageRef) {
        observer.current.unobserve(lastImageRef);
      }
    };
  }, [visibleImages, isBatchLoading]);

  return (
    <div className="page">
      <Navigation />
      <div className="left_group flex-1">
        <img className="logo_image" src={logo} alt="logo" />
        <div className="User-container">
          <div className="person-container">
            <img className="person-image" src={person} alt="person" />
            <span className="person-name">Anhofa</span>
            <span className='person-message'>
              {isEditingEmail ? (
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setIsEditingEmail(false)} // 失去焦点时停止编辑
                />
              ) : (
                <>
                  {email}
                  <img
                    src={edit}
                    alt="edit"
                    onClick={() => setIsEditingEmail(true)} // 点击图标开始编辑
                    className="edit-icon"
                  />
                </>
              )}
            </span>
            <span className='person-message'>
              {isEditingPhone ? (
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  onBlur={() => setIsEditingPhone(false)} // 失去焦点时停止编辑
                />
              ) : (
                <>
                  {phone}
                  <img
                    src={edit}
                    alt="edit"
                    onClick={() => setIsEditingPhone(true)} // 点击图标开始编辑
                    className="edit-icon"
                  />
                </>
              )}
            </span>
          </div>
          <div className="work-container">
            <span className="color-change-title">作品列表</span>
            {/* <button onClick={() => setIsBatchLoading(!isBatchLoading)}>
              {isBatchLoading ? "一次性加载所有图片" : "分批加载图片"}
            </button> */}
            <div className="gallery">
              {visibleImages.map((image) => (
                <img key={image.id} src={image.src} alt={image.id} className="gallery-image" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
