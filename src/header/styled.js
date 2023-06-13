import styled from "styled-components";

export const HeaderUl = styled.ul`
    padding: 0;
    margin: 0;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #FFFFFF;
    display: flex;
    align-items: center;

    li{
        list-style: none;
        cursor: pointer;
    }
    .hover:hover{
        border-bottom: 1px solid yellow;
        padding: 4px 0;
        transition: 0.5s;
    }
    a:not(:first-child){
        margin-left: 40px;
    }
    li:not(:first-child){
        margin-left: 40px;
    }
    a{
        text-decoration: none;
        color: #FFFFFF;
    }
`
