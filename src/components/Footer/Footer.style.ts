import styled from "styled-components"

export const FooterStyle = styled.div`

h5{
    font-weight: 100;
    font-size: 48px;
    line-height: 50px;
    letter-spacing: 0.03em;
    color: #000000;
    margin-left: 80px;
    width: 482px;
    margin-bottom: 40px;
}

footer{
    max-width: 1440px;
    height: 145px;
    background: #C19567;
    display: flex;
    justify-content: end;
}

button{
    align-items: flex-start;
    display: block;
    margin: auto 70px;
    background: #D9D9D9;
    border: none;
    border-radius: 50px;
    padding: 10px 30px;
    font-weight: 100;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.195em;
    filter: drop-shadow(0px 5px 7px rgba(0, 0, 0, 0.21));
    cursor: pointer;
    :hover{
            background-color: #C19567;
            transition: 0.7s;
            color: #000000;
        }
}

.barril{
    display: flex;
    width: 985px;
    height: 400px;
    margin: 0 auto;
    margin-bottom: 89px;
}

.texto{   
    margin: auto 0;  
}

.direitos{
    margin: auto 0;  
    justify-content: end;   
    margin-right: 80px;
}

.socialmedia{
    margin-top: 10px;
    display:flex;
}
`