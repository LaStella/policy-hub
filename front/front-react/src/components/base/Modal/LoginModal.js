import Text from "../Text";
import Modal from ".";

const LoginModal = ({ visible, onClose }) => {
    return (
        <div>
            <Modal.Base visible={visible}>
                <Text text-align="center" size={24} strong={true} block={true}>환영합니다</Text>
                <button onClose={onClose}>닫기</button>
            </Modal.Base>
        </div>
    )
}

export default LoginModal;