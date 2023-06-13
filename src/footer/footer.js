import * as Styled from './styled'
import visa from '../img/visa.png'
import masterCard from "../img/masterCard.png"
import phone from "../img/phone.png"
import mail from "../img/mail.png"
import youtube from "../img/youtube.png"
import facebook from "../img/facebook.png"
import telegram from "../img/telegram.png"
import e from "../img/e.png"
import vk from "../img/vk.png"

export const Foooter = () => {
    return (
        <Styled.Footer>
            <div style={{width: "1110px"}}>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <Styled.FooterUl>
                        <li className='liTitle'>Полезные ссылки</li>
                        <li>Доставка</li>
                        <li>Оплата</li>
                        <li>Акции</li>
                        <li>Политика конфиденциальности</li>
                    </Styled.FooterUl>

                    <Styled.FooterUl>
                        <li className='liTitle'>оплата</li>
                        <li>
                            Lorem ipsum dolor sit amet, consectetur<br/>
                            adipiscing elit. Ullamcorper<br/>
                            justo, nec, pellentesque.<br/>
                        </li>
                        <li><img src={visa}/><img src={masterCard}/></li>
                    </Styled.FooterUl>

                    <Styled.FooterUl>
                        <li className='liTitle'>контакты</li>
                        <li><img src={phone}/>8 (812) 234-56-55</li>
                        <li><img src={phone}/>8 (812) 234-56-55</li>
                        <li><img src={mail}/>ojjo@ojjo.ru</li>
                    </Styled.FooterUl>

                    <Styled.FooterUl>
                        <li className='liTitle'>социальные сети</li>
                        <li>
                            Lorem ipsum dolor sit amet, consectetur<br/>
                            adipiscing elit. Ullamcorper<br/>
                            justo, nec, pellentesque.<br/>
                        </li>
                        <li><img src={youtube}/><img src={vk}/><img src={facebook}/><img src={telegram}/><img src={e}/></li>
                    </Styled.FooterUl>
                </div>
                <Styled.FooterInfo>
                    <li>(c) 2020 OJJO jewelry</li>
                    <li>Договор публичной офферты</li>
                    <li>Контрагентам</li>
                    <li>Сделано Figma.info</li>
                </Styled.FooterInfo>
            </div>
        </Styled.Footer>
    )
}