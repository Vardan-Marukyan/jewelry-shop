import * as Styled from "./styled"
import { Link } from "react-router-dom"

export const SingUp = () => {
    return (
        <>
            <div style = {{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "rgb(229, 229, 229);"}}>
                <Styled.Box>
                    <Styled.Title>Sign up</Styled.Title>
                    <div style={{paddingBottom: "50px"}}>
                        <Styled.Span>Email</Styled.Span>
                        <Styled.Input type="email" placeholder="Enter your email address"/>
                    </div>
                    
                    <div style={{paddingBottom: "50px"}}>
                        <Styled.Span>Username</Styled.Span>
                        <Styled.Input type="text" placeholder="Enter your User name"/>
                    </div>

                    <div style={{paddingBottom: "50px"}}>
                        <Styled.Span>Password</Styled.Span>
                        <Styled.Input type="password" placeholder="Enter your Password"/>
                    </div>

                    <div>
                        <Styled.Span>Confrim Password</Styled.Span>
                        <Styled.Input type="password" placeholder="Confrim your Password"/>
                    </div>
                    <Styled.Button style={{marginTop: "55px"}}>Register</Styled.Button>
                    <Styled.Login>Don’t have an account ? <Link to = "/in">Sing in</Link></Styled.Login>
                </Styled.Box>
            </div>
        </>
    )
}