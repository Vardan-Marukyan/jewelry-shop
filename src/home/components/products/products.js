import * as Styled from './styled'
import ring from '../../../img/ring.png'
import bracelets from '../../../img/bracelets.png'
import suspension from  '../../../img/suspension.png'
import cufflinks from '../../../img/cufflinks.png'
import hours from '../../../img/hours.png'
import earrings from '../../../img/earrings.png'

export const Products = () => {
    return (
        <Styled.ProductsBg>
            <Styled.ProductsStyle>
                <div>
                    <Styled.SubTitle>К мероприятиям</Styled.SubTitle>
                    <Styled.Title>Настоящая красота здесь!</Styled.Title>
                </div>
                <div>
                    <Styled.Сatalog>
                        <Styled.catalogBtnHover>
                            <div className='catalogBtn'><div className='catalogBtn catalogBtnSkewed'>СВАДЬБА</div></div>
                        </Styled.catalogBtnHover>
                        <Styled.catalogBtnHover>
                            <div className='catalogBtn'><div className='catalogBtn catalogBtnSkewed'>МУЖУ</div></div>
                        </Styled.catalogBtnHover>
                        <Styled.catalogBtnHover>
                            <div className='catalogBtn'><div className='catalogBtn catalogBtnSkewed'>ЖЕНЕ</div></div>
                        </Styled.catalogBtnHover>
                        <Styled.catalogBtnHover>
                            <div className='catalogBtn'><div className='catalogBtn catalogBtnSkewed'>ПАРТНЕРУ</div></div>
                        </Styled.catalogBtnHover>
                        <Styled.catalogBtnHover>
                            <div className='catalogBtn'><div className='catalogBtn catalogBtnSkewed'>КОЛЛЕКЦИИ</div></div>
                        </Styled.catalogBtnHover>
                        <Styled.catalogBtnHover>
                            <div className='catalogBtn'><div className='catalogBtn catalogBtnSkewed'>РЕДКОСТЬ</div></div>
                        </Styled.catalogBtnHover>
                    </Styled.Сatalog>
                </div>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <Styled.CatalogImg style={{backgroundImage: `url(${ring})`}}>
                        <div style={{paddingBottom: "30px"}}>КОЛЬЦА</div>
                    </Styled.CatalogImg>

                    <Styled.CatalogImg style={{backgroundImage: `url(${earrings })`}}>
                        <div style={{paddingBottom: "30px"}}>серьги</div>
                    </Styled.CatalogImg>

                    <Styled.CatalogImg style={{backgroundImage: `url(${suspension})`}}>
                        <div style={{paddingBottom: "30px"}}>подвески</div>
                    </Styled.CatalogImg>
                </div>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <Styled.CatalogImg style={{backgroundImage: `url(${cufflinks})`}}>
                        <div style={{paddingBottom: "30px"}}>запонки</div>
                    </Styled.CatalogImg>

                    <Styled.CatalogImg style={{backgroundImage: `url(${bracelets})`}}>
                        <div style={{paddingBottom: "30px"}}>браслеты</div>
                    </Styled.CatalogImg>

                    <Styled.CatalogImg style={{backgroundImage: `url(${hours})`}}>
                        <div style={{paddingBottom: "30px"}}>часы</div>
                    </Styled.CatalogImg>
                </div>
            </Styled.ProductsStyle>
        </Styled.ProductsBg>
    )
}