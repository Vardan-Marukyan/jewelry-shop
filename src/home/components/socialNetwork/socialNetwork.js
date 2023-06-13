import * as Styled from './styled'
import card4 from '../../../img/card4.png'
import card5 from '../../../img/card5.png'
import card6 from '../../../img/card6.png'
import card7 from '../../../img/card7.png'
import card8 from '../../../img/card8.png'
import card9 from '../../../img/card9.png'

export const SocialNetwork = () => {
    return (
        <Styled.SocialNetworkBg>
            <div style={{width: "1110px"}}>
                <Styled.SocialNetworkSubTitle>#ojjo_jewerly</Styled.SocialNetworkSubTitle>
                <Styled.SocialNetworkTitle>Мы в социальных сетях</Styled.SocialNetworkTitle>
                <div style={{display: "flex"}}>
                    <img src={card4}/>
                    <img src={card5}/>
                    <img src={card6}/>
                </div>
                <div style={{display: "flex"}}>
                    <img src={card7}/>
                    <img src={card8}/>
                    <img src={card9}/>
                </div>
            </div>
        </Styled.SocialNetworkBg>
    )
}