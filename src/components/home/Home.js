import React from 'react';
import Header from '../header/Header';
import Main from '../main-section/Main';
import Courses from '../course-modules/Courses';

const Home = () => {
  return (
    <div>
        <Header/>
        <Main />
        <Courses />
    </div>
  )
}

export default Home