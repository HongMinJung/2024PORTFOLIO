import React from 'react';
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
