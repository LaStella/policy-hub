import Modal from "./index";
import { Text, Button, Spacer, Input } from "../../../components"
import styled from "@emotion/styled";

const SignUpModalStyle = styled(Modal.Base)`
    width: 43.5764vw;
    height: 43.0787vw;
`

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
    margin-bottom: 40px;
`

const SignUpModal = ({ visible, onClose, onClick, signUpOnClose, ...props}) => {
    return (
        <div>
            <SignUpModalStyle visible={visible} onClose={onClose}>
                <div>
                    <Spacer type="vertical">
                        <center>
                            <Text size={40}>환영합니다</Text>
                        </center>
                        <Spacer size={15} type="vertical">
                            <div>
                                <Input.SignUpInput />
                            </div>
                            <center>
                                <ButtonStyle primary={true} size={"large"} label={"제출"} onClick={onClick}></ButtonStyle>
                            </center>
                            <center>
                                <Button primary={false} size={"large"} label={"닫기"} onClick={onClick} signUpOnClose={signUpOnClose}></Button>
                            </center>
                        </Spacer>
                    </Spacer>
                </div>
            </SignUpModalStyle>
        </div>
    )
}

export default SignUpModal;