import Modal from "./index";
import { Text, Button, Spacer } from "../../../components"
import styled from "@emotion/styled";


const LoginModal = ({ visible, onClose, onClick, ...props}) => {

    return (
        <div>
            <Modal.Base visible={visible} onClose={onClose}>
                <div>
                    <Spacer>
                        <Text text-align="center" size={24} strong={true} block={true}>환영합니다</Text>
                        <button onClick={onClick}>닫기</button>
                    </Spacer>
                </div>
            </Modal.Base>
        </div>
    )
}

export default LoginModal;