import styled from "styled-components";

export const CatalogSelect = styled.div`

`
export const Select = styled.select`
    border: none;
    border-bottom: 1px solid #D6D6D6;
    width: 160px;
    text-align: start;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #333333;
    outline: none;
    padding-bottom: 3px;
    cursor: pointer;
    background: #E5E5E5;
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

export const Border = styled.div`
    border-bottom: 1px solid #D6D6D6;
    padding: 95px 0;
`

export const MoreButton = styled.button`
    background: #333333;
    border: 1px solid #FFFFFF;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #FFFFFF;
    padding: 15px 35px;
    cursor: pointer;
    &:hover{
        background: rgb(255, 255, 255);
        border: 1px solid rgb(51, 51, 51);
        color: rgb(51, 51, 51);
        transition: 0.4s;
    }
`