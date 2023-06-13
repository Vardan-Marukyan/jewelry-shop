import * as Styled from "./styled"
import { Link } from "react-router-dom"

export const SingIn = () => {
    return (
        <>
            <div style = {{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "rgb(229, 229, 229);"}}>
                <Styled.Box>
                    <Styled.Title>Sign in</Styled.Title>
                    <div style={{paddingBottom: "50px"}}>
                        <Styled.Span>Email</Styled.Span>
                        <Styled.Input type="email" placeholder="Enter your email address"/>
                    </div>

                    <div>
                        <Styled.Span>Password</Styled.Span>
                        <Styled.Input type="password" placeholder="Enter your Password"/>
                    </div>
                    <Styled.Button style={{marginTop: "55px"}}>Login</Styled.Button>
                    <Styled.Register>Don’t have an account ? <Link to = "/up">Sing up</Link></Styled.Register>
                </Styled.Box>
            </div>
        </>
    )
}