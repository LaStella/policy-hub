import Modal from "./index";
import { Text, Button, Spacer } from "../../../components"
import styled from "@emotion/styled";

const LoginModal = ({ visible, onClose, onClick, ...props}) => {
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
                                <Text text-align="left" size={24} block={true}> ◇ 부가 설명</Text>
                            </div>
                            <div>
                                <Text text-align="left" size={24} block={true}> ◇ 부가 설명</Text>
                            </div>
                            <div>
                                <Text text-align="left" size={24} block={true}> ◇ 부가 설명</Text>
                            </div>
                            <div>
                                <Text text-align="left" size={24} block={true}> ◇ 부가 설명</Text>
                            </div>
                        </Spacer>
                        <center>
                            <Button primary={true} size={"large"} label={"자세히 확인하기"} onClick={onClick}></Button>
                            <Button primary={false} size={"large"} label={"닫기"} onClick={onClick}></Button>
                        </center>
                    </Spacer>
                </div>
            </Modal.Base>
        </div>
    )
}

export default LoginModal;