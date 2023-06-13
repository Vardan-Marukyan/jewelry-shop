import styled from "styled-components";

export const BlogBg = styled.div`
    background: #E5E5E5;
    padding: 100px 0 60px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const BlogSubTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 140%;
    text-align: center;
    color: #333333;
    margin-bottom: 15px;
`
export const BlogTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Noto Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 41px;
    text-align: center;
    color: #333333;
    margin-bottom: 60px;
`
export const BlogCard = styled.div`
    width: 350px;
    height: 370px;
    display: flex;
    align-items: end;
    justify-content: center;
    background-repeat: no-repeat;
    background-size: cover;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 140%;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;
    &:hover{
        color: rgb(40,46,40);
        font-size: 22px;
        transition: 0.4s;
    }
`
export const BlogButton = styled.button`
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