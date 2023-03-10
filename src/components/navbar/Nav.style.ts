import styled from "styled-components";

export const NavStyle = styled.div`
    max-height: 136px;
    margin-top: 10px;
.container{
    display: flex;
    margin-top: 27px;
    img{
        margin-right: 25%;
    }
}

 .containermenor{
    align-items: center;
    justify-content: space-between;
    display: flex;
    color: #6B6767;
    font-size: 16px;
    width: 480px;



    button{
        letter-spacing: 0.28em;
        color: #6B6767;
        border: none;
        font-size: 16px;
        cursor: pointer;
        }
    
 }

 .sobrenos{
    background: none;
    :hover{
        transition: 1s;
        color: #000000;
    }
    
 }

 .produtos{
    background: none;
    :hover{
        transition: 1s;
        color: #000000;
    }
 }
 .reserve{
        width: 140px;
        height: 27px;
        border-radius: 25px;
        background: #D9D9D9;
        padding: 3px 13px ;  

        :hover{
            background-color: #C19567;
            transition: 0.7s;
            color: #000000;
        }
    }
 
`