import React from 'react';
import { NavLink } from 'react-router-dom';
import './main-page.css';
import mylogo from '../../pages/main-page/images/logo.jpg';
import { ReactP5Wrapper } from 'react-p5-wrapper';
import sketch from './sketches/sketch/sketch.js';

export const MainPage = () => {
  return (
    <>
      <div className="main-logo">
        <img src={mylogo} alt="#" className='main-logo__logo' />
      </div>
      <div className="wrap">
        <div className="main-elements">
          <div className="main-elements__title">
            <span className="main-elements__title-p">Удачного Путешествия</span>
          </div>
          <div className="main-elements__btns">
            <NavLink className='main-elements_btn' to="/login">вход</NavLink>
            <NavLink className='main-elements_btn' to='/signup'>регистрация</NavLink>
          </div>
          <div>
            <ReactP5Wrapper sketch={sketch}></ReactP5Wrapper>
          </div>
        </div>
      </div>
    </>
  )
}
