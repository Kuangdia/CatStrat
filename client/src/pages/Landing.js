import React from 'react'
import {useState} from 'react';
import InfoSection from '../components/Homepage/HomeInfo';
import { discover, manage, signup } from '../components/Homepage/HomeInfo/Data';
import Homepage from '../components/Homepage/Homepage';
import Video from '../videos/video2.mp4'

function Home() {

  return (
    <>
      <Homepage />
      <InfoSection Video={Video} {...discover}/>
      <InfoSection {...manage}/>
      <InfoSection {...signup}/>
    </>
  );
}

export default Home;