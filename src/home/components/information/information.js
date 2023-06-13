import * as Styled from './styled'
import { Link } from 'react-router-dom'

export const Information = () => {
    return (
        <Styled.InformationBg>
            <div>
                <Styled.InfoSubTitle>Не знаете, что выбрать?</Styled.InfoSubTitle>
                <Styled.InfoTitle>Посетите наши салоны в Москве</Styled.InfoTitle>
                <Styled.InfoText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut duis tortor vitae pellentesque <br/>
                    egestas quam pulvinar. Pellentesque porttitor velit sit pellentesque. Suspendisse donec<br/>
                    pretium id dignissim. Dignissim ultrices eget orci viverra. Egestas quis et ut ultrices<br/>
                    imperdiet lectus nulla tempus. Pharetra lorem sem purus nisi libero viverra ipsum.
                </Styled.InfoText>
                <div style = {{display: "flex", justifyContent: "center"}}>
                    <Link to = "/contacts"><Styled.InfoButton>наши салоны</Styled.InfoButton></Link>
                </div>
            </div>
        </Styled.InformationBg>
    )
}