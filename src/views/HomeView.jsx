import React from 'react';
import Gnb from '../components/Gnb';
import Header from '../components/Header';
import Main from '../components/Main';
import Banner from '../components/Banner';
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
        <Banner />
        <Profile />
        <Project />
        <Contact />
      </Main>
      <Footer />
    </div>
  )
}
