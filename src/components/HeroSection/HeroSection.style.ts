import styled from "styled-components";
import bg from "../../assets/background.png"

export const HeroStyle = styled.div`
    height: 779px;
    background-image: url(${bg});
    background-position: center top;
    background-size: cover;
    display: flex;
    align-items: flex-end;
    position: relative;

    .bottle{
      position: absolute;
      top: 4rem;
    }
  `
