import { useEffect } from "react";
import styled from "styled-components";

const MusieWave = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  iframe {
    display: none;
  }

  .music {
    width: 50px;
    height: 30px;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    .bar {
      width: 3px;
      border-radius: 40%;
      background: white;
      animation: movement 1.5s ease-in-out infinite;
    }

    @keyframes movement {
      0%,
      100% {
        height: 2px;
      }
      50% {
        height: 20px;
      }
    }
    .bar:nth-child(1) {
      background: red;
      animation-delay: 1s;
    }
    .bar:nth-child(2) {
      background: black;
      animation-delay: 0.8s;
    }
    .bar:nth-child(3) {
      background: red;
      animation-delay: 0.6s;
    }
    .bar:nth-child(4) {
      background: black;
      animation-delay: 0.4s;
    }
    .bar:nth-child(5) {
      background: red;
      animation-delay: 0.2s;
    }
    .bar:nth-child(6) {
      background: black;
      animation-delay: 0.2s;
    }
    .bar:nth-child(7) {
      background: red;
      animation-delay: 0.4s;
    }
    .bar:nth-child(8) {
      background: black;
      animation-delay: 0.6s;
    }
    .bar:nth-child(9) {
      background: red;
      animation-delay: 0.8s;
    }
    .bar:nth-child(10) {
      background: black;
      animation-delay: 1s;
    }
  }
`;

const MusicWave = () => {
  // var audio = new Audio("music.mp3");
  // const Playit = () => {
  //   audio.volume = 0.5;
  //   audio.play();
  // };
  // useEffect(() => {
  //   setTimeout(() => Playit(), 2000);
  // }, []);

  return (
    <MusieWave>
      {/* <audio
        id="musicPlayer"
        src="music.mp3"
        autoPlay={true}
        loop={true}
      ></audio> */}
      <div className="music">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div>music name</div>
    </MusieWave>
  );
};

export default MusicWave;
