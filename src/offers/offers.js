import * as Styled from './styled'

export const Offers = () => {
    return (
        <Styled.OffersBg>
                <Styled.OffersSubTitle>Полезные советы и персональный предложения</Styled.OffersSubTitle>
                <Styled.OffersTitle>Эксклюзивная рассылка</Styled.OffersTitle>
                <div style={{display: "flex"}}>
                    <Styled.OffersUl>
                        <li>Личный менеджер</li>
                        <li>Доставка и оформление</li>
                        <li>Индивидуальный дизайн</li>
                    </Styled.OffersUl>
                    <div style = {{padding: "14px 15px", border: "1px solid #FFFFFF"}}>
                        <Styled.SendMailDiv>
                            <Styled.Mail type='email' placeholder='ВАШ E-MAIL'/>
                            <Styled.SendMailButton>отправить</Styled.SendMailButton>
                        </Styled.SendMailDiv>
                    </div>
                </div>
        </Styled.OffersBg>
    )
}