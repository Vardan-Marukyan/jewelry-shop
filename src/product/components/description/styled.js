import styled from "styled-components"


export const DescriptionCard = styled.div`
    padding: 40px 30px;
    background: #E5E5E5;
    border: 1px solid #D6D6D6;
    display: flex;
    flex-direction: column;
    align-items: start;
    text-align: start;
`

export const DescriptionTitle = styled.div`
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #333333;
    margin-bottom: 30px;
`
export const DescriptionText = styled.div`
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #333333;
    width: 460px;
    margin: 30px 0;
`

export const Price = styled.div`
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #333333;
    margin-bottom: 30px;
`

export const BuyButton = styled.button`
    background: #333333;
    border: 1px solid #FFFFFF;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #FFFFFF;
    padding: 10px 20px;
    margin-right: 30px;
    border: 1px solid #333333;
    cursor: pointer;
    &:hover{
        background: #F9F9F9;
        border: 1px solid #333333;
        color: #333333;
        transition: 0.4s;
    }
`

export const AddCartButton = styled.button`
    background: #F9F9F9;
    border: 1px solid #333333;
    padding: 10px 20px;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #333333;
    cursor: pointer;
    &:hover{
        background: #333333;
        border: 1px solid #FFFFFF;
        color: #FFFFFF;
        transition: 0.4s;
    }
`

export const productHashtags = styled.div`
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #979797;
`