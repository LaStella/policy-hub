import Modal from "./index";
import { Text, Button, Spacer, Input, Flux } from "../../../components"
import styled from "@emotion/styled";
import { useState } from "react";

const { Row, Col } = Flux;

const ButtonStyle = styled(Button)`
    width: 21.4120vw;
    height: 2.6620vw;

    background: #C5DCD5;
    box-shadow: 0.0000vw 0.2315vw 0.2315vw rgba(0, 0, 0, 0.25);
    border-radius: 2.3148vw;
    font-weight: 700;
    border: 0;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    margin-top: 5vh;
    margin-bottom: 1vh;
`

const ButtonStyle2 = styled(Button)`
    display: inline-block;

    width: 10.2824vw;
    height: 1.8519vw;
    background-color: #ffffff;
    border: 0;

    font-family: 'Noto Serif Thai';
    font-style: normal;
    font-weight: 400;
    font-size: 0.8574vw;
    line-height: 1.8519vw;
    color: #000000;
    margin-bottom: 10vh;

    cursor: pointer;
`

const LoginModal = ({ visible, onClose, onClick, ...props}) => {
    const [signUpVisible, setSignUpVisible] = useState(false);

    const clickSignUpButton = () => {
        setSignUpVisible(true);
        onClose()
    }

    return (
        <div>
            <Modal.Base visible={visible} onClose={onClose}>
                <div>
                    <Spacer type="vertical">
                        <center>
                            <Text size={40}>환영합니다</Text>
                        </center>
                        <Spacer size={15} type="vertical">
                            <div>
                                <Input.LoginInput />
                            </div>
                            <center>
                                <ButtonStyle primary={true} size={"large"} label={"로그인"} onClick={onClick}></ButtonStyle>
                            </center>
                            <center>
                                <Row gutter={[8, 8]}>
                                    <Col span={6}>
                                        <ButtonStyle2 
                                            primary={false} 
                                            size={"large"} 
                                            label={"회원가입"}  
                                            onClick={() => clickSignUpButton()}
                                        />
                                        <Modal.SignUpModal 
                                            visible={signUpVisible} 
                                            signUpOnClose={() => setSignUpVisible(false)} 
                                            onClose={() => setSignUpVisible(false)} 
                                            onClick={() => setSignUpVisible(false)} 
                                        />
                                    </Col> 
                                    <Col span={6}>
                                        <ButtonStyle2 primary={false} size={"large"} label={"아이디/비밀번호 찾기"} onClick={onClick}></ButtonStyle2>
                                    </Col>
                                </Row>
                            </center>
                            <center>
                                <Button primary={false} size={"large"} label={"닫기"} onClick={onClick}></Button>
                            </center>
                        </Spacer>
                    </Spacer>
                </div>
            </Modal.Base>
        </div>
    )
}

export default LoginModal;