import React from 'react'
import {useState} from 'react';
import InfoSection from '../components/Homepage/HomeInfo';
import { discover, manage, signup } from '../components/Homepage/HomeInfo/Data';
import Homepage from '../components/Homepage/Homepage';
import ReactPlayer from "react-player"

function Home() {
  const video = "https://streamable.com/e8vrxk";

  return (
    <>
      <Homepage />
      <InfoSection Video={video} {...discover}/>
      <InfoSection {...manage}/>
      <InfoSection {...signup}/>
    </>
  );
}

export default Home;