import * as Styled from './styled'
import gabanna from '../../../img/catalog/gabanna.png'

export const ProductsYouLike = () => {
    return (
        <div style={{paddingTop: "120px"}}>
            <Styled.SubTitle>Мы подготовили для вас кое-что еще</Styled.SubTitle>
            <Styled.Title>Товары, которые могут Вам понравиться</Styled.Title>
             <div style = {{display: "flex", width: "100%", justifyContent: "space-around"}}>
                <div>
                    <img src = {gabanna} />
                    <Styled.CatalogCardSubTitle>Подвеска</Styled.CatalogCardSubTitle>
                    <Styled.CatalogCardTitle>Dolce & Gabanna</Styled.CatalogCardTitle>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <Styled.CatalogCardPrice>175 000 ₽</Styled.CatalogCardPrice>
                    </div>
                </div>
                <div>
                    <img src = {gabanna}/>
                    <Styled.CatalogCardSubTitle>Подвеска</Styled.CatalogCardSubTitle>
                    <Styled.CatalogCardTitle>Dolce & Gabanna</Styled.CatalogCardTitle>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <Styled.CatalogCardPrice>175 000 ₽</Styled.CatalogCardPrice>
                    </div>
                </div>
                <div>
                    <img src = {gabanna}/>
                    <Styled.CatalogCardSubTitle>Подвеска</Styled.CatalogCardSubTitle>
                    <Styled.CatalogCardTitle>Dolce & Gabanna</Styled.CatalogCardTitle>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <Styled.CatalogCardPrice>175 000 ₽</Styled.CatalogCardPrice>
                    </div>
                </div>
            </div>
        </div>
    )
}