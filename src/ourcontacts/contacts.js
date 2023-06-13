import * as Styled from './styled'
import phone from '../img/phone2.png'
import mail from '../img/mail.png'
import dot from '../img/dot.png'
import maps from '../img/contact__maps.png'

export const Contacts = () => {
    return(
        <>
        <div style={{
            padding: "100px 0 150px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "#E5E5E5"
        }}>
            <div style = {{width: "1110px"}}>
                <Styled.Title>Контакты</Styled.Title>
                <div style = {{display: "flex", justifyContent: "space-between", marginTop: "30px", borderBottom: "1px solid #D6D6D6", paddingBottom: "60px"}}>
                    <div style = {{display: "flex", flexDirection: "column", alignItems: "start"}}>
                        <Styled.ContactsTitle>Главный офис</Styled.ContactsTitle>
                        <div style = {{display: "flex", alignItems: "start"}}>
                            <img src={dot} style={{marginRight: "15px"}}/>
                            <Styled.ContactsUl>
                                <li>Невский 140, офис 1-5</li>
                                <li>Невский 140, офис 1-5</li>
                            </Styled.ContactsUl>
                        </div>
                    </div>

                    <div style = {{display: "flex", flexDirection: "column", alignItems: "start"}}>
                        <Styled.ContactsTitle>Телефоны</Styled.ContactsTitle>
                        <div style = {{display: "flex", alignItems: "start"}}>
                            <img src={phone} style={{marginRight: "15px"}}/>
                            <Styled.ContactsUl>
                                <li>8 (812) 458-56-45</li>
                                <li>8-911-878-00-00</li>
                            </Styled.ContactsUl>
                        </div>
                    </div>

                    <div style = {{display: "flex", flexDirection: "column", alignItems: "start"}}>
                        <Styled.ContactsTitle>E-mail</Styled.ContactsTitle>
                        <div style = {{display: "flex", alignItems: "start"}}>
                            <img src={mail} style={{marginRight: "15px"}}/>
                            <Styled.ContactsUl>
                                <li>office@ojjo.com</li>
                                <li>sales@ojjo.com</li>
                            </Styled.ContactsUl>
                        </div>
                    </div>

                    <div style = {{display: "flex", flexDirection: "column", alignItems: "start"}}>
                        <Styled.ContactsTitle>Доп. адреса</Styled.ContactsTitle>
                        <div style = {{display: "flex", alignItems: "start"}}>
                            <img src={dot} style={{marginRight: "15px"}}/>
                            <Styled.ContactsUl>
                                <li>Невский 142, офис 1-5</li>
                                <li>Загородный 145, офис 11-15</li>
                            </Styled.ContactsUl>
                        </div>
                    </div>
                </div>
            </div>
            <img src={maps} style = {{marginTop: "60px"}}/>
        </div>
        </>
    )
}