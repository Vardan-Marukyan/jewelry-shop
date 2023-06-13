import styled from "styled-components";


export const Title = styled.div`
    font-family: 'Noto Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 41px;
    text-align: center;
    color: #333333;
    margin-bottom: 95px;
`

export const SubTitle = styled.div`
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 140%;
    text-align: center;
    color: #333333;
    margin-bottom: 15px;
`

export const CatalogCardTitle = styled.div`
    display: flex;
    justify-content: center;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 140%;
    text-align: center;
    color: #333333;
    margin-bottom: 15px;
`

export const CatalogCardSubTitle = styled.div`
    display: flex;
    justify-content: center;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    color: #333333;
    margin-bottom: 10px;
`

export const CatalogCardPrice = styled.button`
    background: #333333;
    border: 1px solid #FFFFFF;
    padding: 10px 20px;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #FFFFFF;
    cursor: pointer;
    &:hover{
        background: rgb(255, 255, 255);
        border: 1px solid rgb(51, 51, 51);
        color: rgb(51, 51, 51);
        transition: 0.4s;
    }
`
