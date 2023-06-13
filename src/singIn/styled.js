import styled from "styled-components";

export const Box = styled.div`
    background: #fff;
    padding: 100px;
`

export const Title = styled.div`
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 45px;
    color: #000000;
    margin-bottom: 45px;
`

export const Input = styled.input`
    border-top: none;
    border-right: none;
    border-left: none;
    border-image: initial;
    border-bottom: 2px solid rgb(153, 153, 153);
    outline: none;
    padding: 10px 110px 10px 0;
    text-align: start;
`

export const Span = styled.div`
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    color: #999999;
`

export const Button = styled.button`
    width: 100%;
    background: #333333;    
    border: 1px solid #FFFFFF;
    padding: 15px 35px;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #FFFFFF;
    cursor: pointer;
    &:hover{
        color: #333333;
        background: #FFFFFF; 
        transition: 0.4s;
        border: 1px solid #333333;
    }
`

export const Register = styled.div`
    margin-top: 20px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    font-family: 'Gilroy';
    color: #000000;
    a{
        color: #333333;
    }
`