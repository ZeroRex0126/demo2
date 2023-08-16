import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import MusicWave from "../musicWave/musicWave";
import { fontColor, primaryColor } from "../../libs/color";

// const NavBarComp = styled.nav`
//   display: ${(props) =>
//     window.innerWidth > 991 ? (props.fixed ? "flex" : "none") : "flex"};
// `;

const NavBarComp = styled.nav`
  // position: absolute;
  //  position:fixed;
  //  top:0;
  // bottom: 0;
  background-color: ${primaryColor};
  color: ${fontColor};

  .nav-link,
  .font-secondary {
    color: ${fontColor} !important;
  }

  .nav-link:hover {
    text-decoration: underline;
    text-decoration-thickness: 3px;
  }

  .font-secondary {
    font-family: "Script";
  }

  .navbar-toggler {
    border: none;
  }
  @media (min-width: 991px) {
    .music-item {
      position: fixed;
      right: 10px;
      top: 10px;
    }
  }

  .hamRotate.active {
    transform: rotate(45deg);
  }
  .hamRotate180.active {
    transform: rotate(180deg);
  }
  .line {
    fill: none;
    transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
    stroke: ${fontColor};
    stroke-width: 5.5;
    stroke-linecap: round;
  }

  .ham .top {
    stroke-dasharray: 40 130;
  }
  .ham .middle {
    stroke-dasharray: 40 140;
  }
  .ham .bottom {
    stroke-dasharray: 40 205;
  }
  .ham.active .top {
    stroke-dasharray: 75 130;
    stroke-dashoffset: -63px;
  }
  .ham.active .middle {
    stroke-dashoffset: -102px;
  }
  .ham.active .bottom {
    stroke-dasharray: 110 205;
    stroke-dashoffset: -86px;
  }
`;

const TopNav = ({ webSiteSetting }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [fixed, setFixed] = useState(false);
  const lastScrollY = useRef(0);
  const navRef = useRef(null);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (window.innerWidth > 991) {
      if (currentScrollY > lastScrollY.current) {
        setFixed(false);
      } else {
        setFixed(true);
      }
      lastScrollY.current = currentScrollY;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function showMenuFunc() {
    setShowMenu(!showMenu);
  }
  return (
    <NavBarComp
      className="navbar fixed-top shadow-sm navbar-expand-lg py-3 py-lg-0 px-lg-5"
      ref={navRef}
      fixed={fixed}
    >
      <a href="index.html" className="navbar-brand d-block d-lg-none">
        <h1 className="font-secondary mb-n2">{webSiteSetting.title}</h1>
      </a>
      <div
        className={`navbar-toggler menu-toggle ${showMenu ? "active" : ""}`}
        onClick={() => setShowMenu(!showMenu)}
      >
        <svg
          className={`ham ${showMenu ? "active" : ""}`}
          viewBox="0 0 100 100"
          width="50"
          // height="50"
        >
          <path
            className="line top"
            d="m 70,33 h -40 c -11.092231,0 11.883874,13.496726 -3.420361,12.956839 -0.962502,-2.089471 -2.222071,-3.282996 -4.545687,-3.282996 -2.323616,0 -5.113897,2.622752 -5.113897,7.071068 0,4.448316 2.080609,7.007933 5.555839,7.007933 2.401943,0 2.96769,-1.283974 4.166879,-3.282995 2.209342,0.273823 4.031294,1.642466 5.857227,-0.252538 v -13.005715 16.288404 h 7.653568"
          />
          <path
            className="line middle"
            d="m 70,50 h -40 c -5.6862,0 -8.534259,5.373483 -8.534259,11.551069 0,7.187738 3.499166,10.922274 13.131984,10.922274 11.021777,0 7.022787,-15.773343 15.531095,-15.773343 3.268142,0 5.177031,-2.159429 5.177031,-6.7 0,-4.540571 -1.766442,-7.33533 -5.087851,-7.326157 -3.321409,0.0092 -5.771288,2.789632 -5.771288,7.326157 0,4.536525 2.478983,6.805271 5.771288,6.7"
          />
          <path
            className="line bottom"
            d="m 70,67 h -40 c 0,0 -3.680675,0.737051 -3.660714,-3.517857 0.02541,-5.415597 3.391687,-10.357143 10.982142,-10.357143 4.048418,0 17.88928,0.178572 23.482143,0.178572 0,2.563604 2.451177,3.403635 4.642857,3.392857 2.19168,-0.01078 4.373905,-1.369814 4.375,-3.392857 0.0011,-2.023043 -1.924401,-2.589191 -4.553571,-4.107143 -2.62917,-1.517952 -4.196429,-1.799562 -4.196429,-3.660714 0,-1.861153 2.442181,-3.118811 4.196429,-3.035715 1.754248,0.0831 4.375,0.890841 4.375,3.125 2.628634,0 6.160714,0.267857 6.160714,0.267857 l -0.178571,-2.946428 10.178571,0 -10.178571,0 v 6.696428 l 8.928571,0 -8.928571,0 v 7.142858 l 10.178571,0 -10.178571,0"
          />
        </svg>
      </div>
      <div
        className={`${
          showMenu ? "show" : ""
        } collapse navbar-collapse justify-content-between`}
      >
        <div className="navbar-nav ml-auto py-0">
          <a
            href="#home"
            className="nav-item nav-link"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            Home
          </a>
          <a
            href="#aboutContainer"
            className="nav-item nav-link"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            About
          </a>
          <a
            href="#story"
            className="nav-item nav-link"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            Story
          </a>
          {/* <a
            href="#gallery"
            className="nav-item nav-link"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            Gallery
          </a> */}
        </div>
        <a href="#home" className="navbar-brand mx-5 d-none d-lg-block">
          <h1 className="font-secondary mb-n2">{webSiteSetting.title}</h1>
        </a>
        <div className="navbar-nav mr-auto py-0">
          {/* <a
            href="#family"
            className="nav-item nav-link"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            Family
          </a> */}
          <a
            href="#events"
            className="nav-item nav-link"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            Events
          </a>
          <a
            href="#rsvp"
            className="nav-item nav-link"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            RSVP
          </a>
          <a
            href="#contact"
            className="nav-item nav-link"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            Contact
          </a>
          {/* <a className="nav-item music-item">
            <MusicWave />
          </a> */}
        </div>
      </div>
    </NavBarComp>
  );
};

export default TopNav;

// import React, { useState, useRef } from 'react';
// import styled from 'styled-components';

// const NavbarContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   height: 60px;
//   background-color: #fff;
//   position: ${props => (props.fixed ? 'fixed' : 'absolute')};
//   top: ${props => (props.fixed ? '0' : 'auto')};
//   width: 100%;
//   z-index: 1;
//   box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
// `;

// const TopNav = () => {
//   const [fixed, setFixed] = useState(false);
//   const navRef = useRef(null);

//   const handleScroll = () => {
//     if (window.pageYOffset > navRef.current.offsetTop) {
//       setFixed(true);
//     } else {
//       setFixed(false);
//     }
//   };

//   React.useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <NavbarContainer ref={navRef} fixed={fixed}>
//       <div>Logo</div>
//       <div>Nav items</div>
//     </NavbarContainer>
//   );
// };

// export default TopNav;
