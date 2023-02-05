import styled from "styled-components";

export const ProductStyle = styled.div`

button{
        margin-top: 36px;
        padding: 10px 25px;
        letter-spacing: 0.28em;
        color: #6B6767;
        border: none;
        background-color: #D9D9D9;
        font-size: 16px;
        border-radius: 30px;
        filter: drop-shadow(0px 5px 7px rgba(0, 0, 0, 0.21));
        cursor: pointer;
        :hover{
            background-color: #C19567;
            transition: 0.7s;
            color: #000000;
        }    
    
    }

.hidromel{
    display: flex;
    margin-left: 110px;
    justify-content: center;
    margin-top: 110px;

    .garrafa{
        right: -10px;
        top: 1800px;
        justify-self: end;
        position: absolute;
        z-index: 1;
    }
    .favo{
        margin-left: 150px;
        position: relative;
        z-index: 0;
    }

}

.texto-hidromel{
    justify-content: left;
    width: 448px;
    height: 354px;

}

.melomel{
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    .garrafa-mel{
        transform: scaleX(-1);
        position: absolute;
        z-index: 1;
        left: 0px;
        top: 2350px;
    }
    .canela{
        position: relative;
        z-index: 0;
        bottom: 50px;
    }
}

.texto-mel{
    justify-self: right;
    width: 448px;
    height: 354px;

}

.chave{
    margin: 0 auto;
    max-height: 32px;
    margin-top: 40px;
    margin-bottom: 100px;
}
`