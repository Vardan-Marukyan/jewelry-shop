import styled from "styled-components"

export const ProductsStyle = styled.div`
    width: 1110px;
`

export const ProductsBg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 100px 0 90px;
    background: #E5E5E5;
`

export const SubTitle = styled.div`
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 140%;
    text-align: center;
    color: #333333;
    margin-top: 15px;
`
export const Title = styled.div`
    font-family: 'Noto Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 41px;
    text-align: center;
    color: #333333;
`

export const Сatalog = styled.ul`
    display: flex;
    justify-content: space-between;
    padding: 60px 0;
    height: 100px;
    align-items: center;
`

export const catalogBtnHover = styled.div`
position: relative;
&:hover{
    .catalogBtn{
        bottom: 0px;
        right: 0px;
        width: 165px;
        height: 61px;
        background: #333333;
        color: #FFFFFF;
        cursor: pointer;
        transition: 0.2s;
    }
}
.catalogBtn{
    width: 165px;
    height: 55px;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #F9F9F9;
    border: 1px solid #D6D6D6;
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
}
.catalogBtnSkewed{
    position: absolute;
    bottom: 6px;
    right: 6px;
}
`

export const CatalogImg = styled.div`
    display: flex;
    align-items: end;
    justify-content: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 350px;
    height: 280px;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #FFFFFF;
    &{
        margin-bottom: 30px;
    }
`