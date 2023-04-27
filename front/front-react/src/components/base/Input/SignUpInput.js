import styled from "@emotion/styled";
import { Spacer, Select, Text } from "../../../components"


const SignUpInputStyle = styled.input`
    width: 24.5370vw;
    height: 2.6296vw;
    left: 0.8102vw;
    top: 8.2176vw;

    background: #E6F0EF;
    box-shadow: inset 0.0000vw 0.2315vw 0.2315vw rgba(0, 0, 0, 0.25);
    border-radius: 0.2894vw;
    border: 1px solid ${({invalid}) => invalid ? 'red' : 'gray'};
    font-size: large;
`

const EmailInput = styled.input`
    width: 10.2963vw;
    height: 2.6296vw;

    background: #E6F0EF;
    box-shadow: inset 0.0000vw 0.2315vw 0.2315vw rgba(0, 0, 0, 0.25);
    border-radius: 0.2894vw;
    border: 1px solid ${({invalid}) => invalid ? 'red' : 'gray'};
    font-size: large;
    margin-right: 1vw;
`

const EmailSelect = styled(Select)`
    margin-left: 1vw;
    width: 10.2963vw;
    height: 2.6296vw;
`

const CashSelect = styled(Select)`
    width: 24.5370vw;
    height: 2.6296vw;
`

const SignUpInput = () => {
    return (
        <Spacer type="vertical">
            <center>
                <SignUpInputStyle type="text" placeholder="아이디" />
            </center>
            <center>
                <SignUpInputStyle type="password" placeholder="비밀번호" />
            </center>
            <center>
                <SignUpInputStyle type="password" placeholder="비밀번호 확인" />
            </center>
            <div>
                <EmailInput type="text" placeholder="이메일"></EmailInput>
                <Text size={30}>@</Text>
                <EmailSelect placeholder={"naver.com"} data={['naver.com', 'daum.net', 'gmail.com', 'cnu.ac.kr']}></EmailSelect>
            </div>
            <center>
                <SignUpInputStyle type="text" placeholder="거주지" />
            </center>
            <center>
                <CashSelect placeholder={"소득수준 (월 기준)"} data={['월 80만원 미만', '월 80~150만원', '월 150~500만원', '월 1000만원 이상']}></CashSelect>
            </center>
        </Spacer>
    )
}

export default SignUpInput;