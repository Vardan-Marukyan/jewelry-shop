import styled from "styled-components";
import  offersBG  from "../img/informationBg.png"

export const OffersBg = styled.div`
    background: url(${offersBG}), #333333;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 100px 0 120px;
    flex-direction: column;
`

export const OffersSubTitle = styled.div`
    display: flex;
    justify-content: center;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 140%;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 15px;
`

export const OffersTitle = styled.div`
    display: flex;
    justify-content: center;
    font-family: 'Noto Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 41px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 60px;
`

export const OffersUl = styled.div`
    margin-right: 80px;
    li{
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 140%;
        color: #FFFFFF;
        margin-bottom: 15px;
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: start;
    }
`

export const Mail = styled.input`
    width: 180px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D6D6D6;
    padding: 0 20px;
    outline: none;
`

export const SendMailButton = styled.div`
    padding: 14px 35px;
    background: #333333;
    border: 1px solid #FFFFFF;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-left: 15px;
    cursor: pointer;
    &:hover{
        background: rgb(255, 255, 255);
        border: 1px solid rgb(51, 51, 51);
        color: rgb(51, 51, 51);
        transition: 0.4s;
    }
`
export const SendMailDiv = styled.div`
    padding: 20px 22px;
    display: flex;
    background: #FFFFFF;
`