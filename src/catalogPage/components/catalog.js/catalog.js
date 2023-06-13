import * as Styled from './styled' 
import gabanna from '../../../img/catalog/gabanna.png'
import { Link } from 'react-router-dom'

export const Catalog = () => {
    return (
        <div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <Styled.Select>
                    <option>Бренд </option>
                </Styled.Select>

                <Styled.Select>
                    <option>Цена</option>
                </Styled.Select>

                <Styled.Select>
                    <option>Для кого</option>
                </Styled.Select>

                <Styled.Select>
                    <option>Коллекция </option>
                </Styled.Select>

                <Styled.Select>
                    <option>Сезон</option>
                </Styled.Select>

                <Styled.Select>
                    <option>Событие</option>
                </Styled.Select>
            </div>
            <div style = {{padding: "95px 0", display: 'flex', alignItems: "center", flexDirection: "column"}}>
            <div style = {{display: "flex", width: "100%", justifyContent: "space-around"}}>
                <div>
                    <img src = {gabanna}/>
                    <Styled.CatalogCardSubTitle>Подвеска</Styled.CatalogCardSubTitle>
                    <Styled.CatalogCardTitle>Dolce & Gabanna</Styled.CatalogCardTitle>
                    <div style = {{display: "flex", justifyContent: "center"}}>
                        <Link to="/product"><Styled.CatalogCardPrice>175 000 ₽</Styled.CatalogCardPrice></Link>
                    </div>
                </div>
                <div>
                    <img src = {gabanna}/>
                    <Styled.CatalogCardSubTitle>Подвеска</Styled.CatalogCardSubTitle>
                    <Styled.CatalogCardTitle>Dolce & Gabanna</Styled.CatalogCardTitle>
                    <div style = {{display: "flex", justifyContent: "center"}}>
                        <Link to="/product"><Styled.CatalogCardPrice>175 000 ₽</Styled.CatalogCardPrice></Link>
                    </div>
                </div>
                <div>
                    <img src = {gabanna}/>
                    <Styled.CatalogCardSubTitle>Подвеска</Styled.CatalogCardSubTitle>
                    <Styled.CatalogCardTitle>Dolce & Gabanna</Styled.CatalogCardTitle>
                    <div style = {{display: "flex", justifyContent: "center"}}>
                        <Link to="/product"><Styled.CatalogCardPrice>175 000 ₽</Styled.CatalogCardPrice></Link>
                    </div>
                </div>
            </div>
            <Styled.Border/>
            <div style = {{display: "flex", width: "100%", justifyContent: "space-around"}}>
                <div>
                    <img src = {gabanna} />
                    <Styled.CatalogCardSubTitle>Подвеска</Styled.CatalogCardSubTitle>
                    <Styled.CatalogCardTitle>Dolce & Gabanna</Styled.CatalogCardTitle>
                    <div style = {{display: "flex", justifyContent: "center"}}>
                        <Link to="/product"><Styled.CatalogCardPrice>175 000 ₽</Styled.CatalogCardPrice></Link>
                    </div>
                </div>
                <div>
                    <img src = {gabanna}/>
                    <Styled.CatalogCardSubTitle>Подвеска</Styled.CatalogCardSubTitle>
                    <Styled.CatalogCardTitle>Dolce & Gabanna</Styled.CatalogCardTitle>
                    <div style = {{display: "flex", justifyContent: "center"}}>
                        <Link to="/product"><Styled.CatalogCardPrice>175 000 ₽</Styled.CatalogCardPrice></Link>
                    </div>
                </div>
                <div>
                    <img src = {gabanna}/>
                    <Styled.CatalogCardSubTitle>Подвеска</Styled.CatalogCardSubTitle>
                    <Styled.CatalogCardTitle>Dolce & Gabanna</Styled.CatalogCardTitle>
                    <div style = {{display: "flex", justifyContent: "center"}}>
                        <Link to="/product"><Styled.CatalogCardPrice>175 000 ₽</Styled.CatalogCardPrice></Link>
                    </div>
                </div>
            </div>
            </div>
            <div style = {{display: "flex", justifyContent: "center"}}>
                <Styled.MoreButton>покажите еще</Styled.MoreButton>
            </div>
        </div>
    )
}