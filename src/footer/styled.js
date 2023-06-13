import styled from "styled-components";

export const Footer = styled.footer`
    padding: 80px 0 20px;
    background: #E5E5E5;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const FooterUl = styled.ul`
    width: 255px;
    list-style: none;
    margin-bottom: 60px;    
    li{
        display: flex;
        justify-content: start;
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
        color: #333333;
        margin-bottom: 15px;
        cursor: pointer;
        text-align: start;
    }
    .liTitle{
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 140%;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #333333;
        padding: 10px 0;
        border-bottom: 1px solid #333333;
        margin-bottom: 30px;
        cursor: auto;
    }
    img{
        margin-right: 20px;
        height: 14px;
    }
`
export const FooterInfo = styled.ul`
    border-top: 1px solid #333333;
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    li{
        list-style: none;
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
        color: #333333;
        cursor: pointer;
    }
`