import React from 'react'
import {useState} from 'react';
import InfoSection from '../components/Homepage/HomeInfo';
import { discover, manage, signup } from '../components/Homepage/HomeInfo/Data';
import Homepage from '../components/Homepage/Homepage';
import ReactPlayer from "react-player"
import About from '../components/Homepage/HomeAbout';
import Footer from '../components/Homepage/Footer';

function Home() {
  const video = "https://streamable.com/e8vrxk";

  return (
    <>
      <Homepage />
      <About />
      <InfoSection Video={video} {...discover}/>
      <InfoSection {...manage}/>
      <InfoSection {...signup}/>
      <Footer />
    </>
  );
}

export default Home;