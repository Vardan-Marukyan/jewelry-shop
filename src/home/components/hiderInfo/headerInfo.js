import cocoLogo from '../../../img/cocoLogo.png'
import * as Styled from './styled'
import { Link } from 'react-router-dom'

export const HeaderInfo = () => {
    return (
        <>
            <Styled.HeaderBg>
                <Styled.HeaderStyle>
                    <div style={{padding: "465px 0 80px"}}>
                        <Styled.HeaderTitle>Долго, дорого, богато!</Styled.HeaderTitle>
                        <div style = {{display: "flex", justifyContent: "center"}}>
                        <Link to = "catalog"><Styled.HeaderTitleBtn>каталог изделий</Styled.HeaderTitleBtn></Link>
                        </div>
                    </div>
                </Styled.HeaderStyle>
                <Styled.CocoLogoStyle>
                    <div style={{width: "1110px"}}>
                        <Styled.CocoLogoUl>
                            <li><img src={cocoLogo}/></li>
                            <li><img src={cocoLogo}/></li>
                            <li><img src={cocoLogo}/></li>
                            <li><img src={cocoLogo}/></li>
                            <li><img src={cocoLogo}/></li>
                            <li><img src={cocoLogo}/></li>
                        </Styled.CocoLogoUl>
                    </div>  
                </Styled.CocoLogoStyle>
            </Styled.HeaderBg>
        </>
    )
}