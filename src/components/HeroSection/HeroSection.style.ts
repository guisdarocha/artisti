import styled from "styled-components";
import bg from "../../assets/background.png"


export const HeroStyle = styled.div`
    margin: 35px auto 85px auto;
    height: 779px;
    max-width: 1191px;
    background-image: url(${bg});
    background-position: center top;
    background-size: cover;
    align-items: flex-end;
    position: relative;
    display: flex;
    justify-content: center;


    .main-text{
      position: relative;
      z-index: 999;
      margin: auto 0;
      padding-bottom: 10rem;
      h1{
        font-style: normal;
        font-weight: 100;
        font-size: 60px;
        line-height: 75px;
        letter-spacing: 0.03em;
        max-width: 385px;
      }
      h2{
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.03em;
      }
      img{
        max-height: 32px;
  
      }

    }

    .bottle{
      position: relative;
      z-index: 999;
      margin-bottom: 55px;
    }
    .waves-container{
      bottom: 0vh;
      position: absolute;
      z-index: 0;
    }
    .waves {
  position:relative;
  width: 1191px;
  height:25vh;
  margin-bottom:-7px; /*Fix for safari gap*/
  min-height:100px;
  max-height:265px;
}

.content {
  position:relative;
  height:20vh;
  text-align:center;
  background-color: white;
}

/* Animation */

.parallax > use {
  animation: move-forever 25s cubic-bezier(.55,.5,.45,.5)     infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
   transform: translate3d(-90px,0,0);
  }
  100% {
    transform: translate3d(85px,0,0);
  }
}
/*Shrinking for mobile*/
@media (max-width: 768px) {
  .waves {
    height:40px;
    min-height:40px;
  }
  .content {
    height:30vh;
  }
  h1 {
    font-size:24px;
  }
}
  `
