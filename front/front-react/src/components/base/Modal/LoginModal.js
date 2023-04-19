import Base from "./Base";
import { useState } from "react";

const LoginModal = () => {
    const [visible, setVisible] = useState(false);
    
    return (
        <div>
            <Base visible={visible} onClose={() => setVisible(false)}>
                <h1>어서 와</h1>
                <button onClick={() => setVisible(false)}>닫기</button>
            </Base>
        </div>
    )
}

export default LoginModal;