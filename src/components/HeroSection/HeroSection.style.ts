import styled from "styled-components";
import bg from "../../assets/background.png"


export const HeroStyle = styled.div`
    margin: 20px auto 85px auto;
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
      margin: auto 0;
      h1{
        font-style: normal;
        font-weight: 100;
        font-size: 60px;
        line-height: 75px;
        letter-spacing: 0.03em;
        max-width: 380px;
      }
      h2{
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.03em;
      }

    }

    .bottle{
      margin-bottom: 55px;
    }
  `
