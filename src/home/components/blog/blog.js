import * as Styled from './styled'
import card1 from "../../../img/card1.png"
import card2 from "../../../img/card2.png"
import card3 from "../../../img/card3.png"

export const Blog = () => {
    return(
    <Styled.BlogBg>
        <div style={{width: "1110px"}}>
            <Styled.BlogSubTitle>Полезные статьи</Styled.BlogSubTitle>
            <Styled.BlogTitle>Лучшие советы по подбору дорогих подарков</Styled.BlogTitle>
            <div style={{display: "flex", justifyContent: "space-between", marginBottom: "60px"}}>
                <Styled.BlogCard style={{backgroundImage: `url(${card1})`}}>
                    <div style={{marginBottom: "30px"}}>
                        Как выбрать<br/>
                        часы для своей<br/>
                        будущей жены<br/>   
                    </div>
                </Styled.BlogCard>
                <Styled.BlogCard style={{backgroundImage: `url(${card2})`}}>
                    <div style={{marginBottom: "30px"}}>
                        Запонки для мужа:<br/>
                        7 ключевых правил<br/>
                        покупки аксессуара<br/>
                    </div>
                </Styled.BlogCard>
                <Styled.BlogCard style={{backgroundImage: `url(${card3})`}}>
                    <div style={{marginBottom: "30px"}}>
                        Как выбрать<br/>
                        обручальные кольца<br/>
                        молодоженам<br/>
                    </div>
                </Styled.BlogCard>
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <Styled.BlogButton>читать наш блог</Styled.BlogButton>
            </div>
            
        </div>
    </Styled.BlogBg>
    )
}