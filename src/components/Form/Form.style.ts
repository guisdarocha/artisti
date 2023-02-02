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
    margin-bottom: 150px;
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


`