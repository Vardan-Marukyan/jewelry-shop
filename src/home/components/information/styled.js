import styled from "styled-components";
import informationBg from "../../../img/informationBg.png"

export const InformationBg = styled.div`
    background: url(${informationBg}), #333333;
    padding: 100px 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const InfoSubTitle = styled.div`
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 140%;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 15px;
`

export const InfoTitle = styled.div`
    font-family: 'Noto Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 41px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 45px;
`
export const InfoText = styled.div`

    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const InfoButton = styled.button`
    padding: 15px 35px;
    background: #FFFFFF;    
    border: 1px solid #333333;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #333333;
    cursor: pointer;
    &:hover{
        background: #333333;
        border: 1px solid #FFFFFF;
        transition: 0.4s;
        color: #FFFFFF;
    }
`