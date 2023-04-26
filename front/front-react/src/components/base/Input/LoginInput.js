import styled from "@emotion/styled";
import Spacer from "../Spacer";

const LoginInputStyle = styled.input`
    width: 24.5370vw;
    height: 4.6296vw;
    left: 0.8102vw;
    top: 8.2176vw;

    background: #E6F0EF;
    box-shadow: inset 0.0000vw 0.2315vw 0.2315vw rgba(0, 0, 0, 0.25);
    border-radius: 0.2894vw;
    border: 1px solid ${({invalid}) => invalid ? 'red' : 'gray'};
    font-size: large;
`

const LoginInput = () => {
    return (
        <Spacer type="vertical">
            <center>
                <LoginInputStyle type="text" placeholder="아이디" />
            </center>
            <center>
                <LoginInputStyle type="password" placeholder="비밀번호" />
            </center>
        </Spacer>
    )
}

export default LoginInput;