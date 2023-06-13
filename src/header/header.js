import logo from '../img/logo.png'
import serch from '../img/Vector.png'
import user from '../img/userIcon.png'
import icon from '../img/icon.png'
import { createRef } from 'react'
import { Link } from 'react-router-dom'

import * as Styled from './styled'

export const Header = () => {
    const headerButtonClick = createRef()
    const click = () => {
        headerButtonClick.current.style.background = "#333333"
        headerButtonClick.current.style.transition = "0.9s"
    }
    return (
        <>
        <div ref={headerButtonClick} style = {{
            width: "100%", 
            display: "flex", 
            justifyContent: "center",
            padding: "27px 0 32px",
            background: "#333333",
            }}>
            <div style={{display: "flex", justifyContent: "space-between", width: "1110px"}}>
                <Styled.HeaderUl>
                <li className='hover'>Контрагентам</li>
                <li onClick={click} className='hover'>Дизайнерам</li>
                <li className='hover'>Вакансии</li>
                </Styled.HeaderUl>
                <div>
                    <Link to = "/"><img src = {logo}/></Link>
                </div>
                <Styled.HeaderUl>
                    <li style={{display: "flex"}}><img src={serch}/> <span style={{marginLeft: "16px"}}>Поиск</span></li>
                    <li className='hover'><Link to="in">Вход</Link>/<Link to = "up" style={{margin: "0"}}>Регистрация</Link></li>
                    <li><img src = {user}/></li>
                    <li><img src = {icon}/></li>
                </Styled.HeaderUl>
            </div>
        </div>
        </>
    )
}