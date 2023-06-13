import styled from "styled-components";
import headerBg from "../../../img/headerBg.png"

export const HeaderStyle = styled.div`
    width: 1110px;
`

export const HeaderBg = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url('${headerBg}');
    padding-bottom: 30px;
`

export const HeaderTitle = styled.div`
    font-family: 'Noto Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 49px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 50px;
`

export const HeaderTitleBtn = styled.button`
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
    }
`
export const CocoLogoUl = styled.ul`
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    li{
        list-style: none;
    }
    li:not(:last-child) {
        padding-right: 15px;
        border-right: 1px solid #FFFFFF;
      }
`

export const CocoLogoStyle = styled.div`
    padding-top: 30px;
    border-top: 1px solid rgb(255, 255, 255);
    width: 100%;
    display: flex;
    justify-content: center;
`
