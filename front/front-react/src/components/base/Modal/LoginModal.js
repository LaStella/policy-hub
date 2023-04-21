import Text from "../Text";
import Modal from ".";
import { useState } from "react";

const LoginModal = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div>
            <Modal.Base visible={visible} onClose={() => setVisible(false)}>
                <Text text-align="center" size={24} strong={true} block={true}>환영합니다</Text>
                <button onClick={() => setVisible(false)}>닫기</button>
            </Modal.Base>
        </div>
    )
}

export default LoginModal;