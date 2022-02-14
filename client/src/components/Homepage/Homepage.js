import React from "react";
import { useEffect, useRef, useState } from 'react';
import phonepic from '../../images/phonepic.png'
import "./homepage.scss";
import { gsap, Power3 } from 'gsap';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Homepage() {
  let navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      setLoginStatus(true)
    }

    if (loginStatus) {
      return navigate("/dashboard")
    }

  }, [loginStatus])

  let app = useRef(null)
  let images = useRef(null)
  let content = useRef(null)
  let tl = gsap.timeline();

  useEffect(() => {
    // IMAGES VAR
    const phoneImage = images.firstElementChild;

    // Content vars
    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const contentP = content.children[1]
    const contentButton = content.children[2]

    gsap.to(app, { duration: 0, css: { visibility: 'visible' } })

    // tl.from(phoneImage, { duration: 1.2, y: 1280, ease: Power3.easeOut })
    //   .from(phoneImage.firstElementChild, { duration: 2, x: -190, y: 150, scale: 1.5, ease: Power3.easeOut, delay: .2 })

    gsap.to(phoneImage, { duration: 2.5, x: 1300, y: 0, ease: Power3.easeOut, autoAlpha: 1 })

    //Content Animation
    gsap.from([headlineFirst.children, headlineSecond.children, headlineThird.children], { duration: 1, y: 80, stagger: { each: 0.15, ease: Power3.easeOut }, delay: .8 })
    gsap.from(contentP, { duration: 1, y: 40, opacity: 0, ease: Power3.easeOut, delay: 1.6 })
    gsap.from(contentButton, { duration: 1, y: 40, opacity: 0, ease: Power3.easeOut, delay: 2 })
  })

  return (
    <div className="hero" ref={el => app = el}>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner" ref={el => content = el}>
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner"></div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">Earn, Strategize &</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">Grow Your Portfolio</div>
                </div>
                {/* h1 is children[0] */}
              </h1>
              {/* p is children[1] */}
              <p>Trade with confidence.</p>
              <div className="btn-row">
                <button className="explore-button">Get Started
                  <div className="arrow-icon">
                    <FaArrowAltCircleRight />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="hero-images">
            <div className="hero-images-inner" ref={el => images = el}>
              <div className="hero-image phone">
                <img src={phonepic} alt="phone" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;