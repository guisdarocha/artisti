import styled from "styled-components"

export const FormStyle = styled.div`

input{
    width: 590px;
    height: 51px;
    background-color: #D9D9D9;
    border-radius: 10px;
    border: none;
    margin: 10px auto;
    color: #6B6767;
    ::placeholder{
        padding-left: 20px;
    }
}

h4{ 
    margin-bottom: 30px;
    width: 590px;
    font-weight: 100;
    font-size: 30px;
    line-height: 50px;
    letter-spacing: 0.1em;
    color: #000000;
    text-align: center;
}

form{
    width: 590px;
    height: 554px;
    margin: 0;
}

img{
    height: 100%;
    margin-bottom: 120px;
}

select{
    width: 590px;
    height: 51px;
    background-color: #D9D9D9;
    border-radius: 10px;
    border: none;
    margin: 10px auto;
    color: #6B6767;
    padding-left: 15px;
    
}
.select option{
    border-bottom: solid 5px  red;
    
}

.formulario{
    display: flex;
    justify-content: space-around;
    align-items: center;
}

button{
    display: block;
    margin: 30px auto;
    background: #D9D9D9;
    border: none;
    border-radius: 50px;
    padding: 10px 20px;
    font-weight: 100;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.195em
}
`