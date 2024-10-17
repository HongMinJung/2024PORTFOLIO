import React from 'react';
import Gnb from '../components/Gnb';
import Header from '../components/Header';
import Main from '../components/Main';
import Intro from '../components/Intro';
import Profile from '../components/Profile';
import Project from '../components/Project';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function HomeView() {
  return (
    <div>
      <Gnb />
      <Header />
      <Main>
        <Intro />
        <Profile />
        <Project />
        <Contact />
      </Main>
      <Footer />
    </div>
  )
}
