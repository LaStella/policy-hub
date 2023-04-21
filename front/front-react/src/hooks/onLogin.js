import { Modal } from "../components";

function OnLogin({ visible, setVisible }) {
    return (
        <div>
            <Modal.LoginModal visible={visible} onClose={() => setVisible(false)}>
            </Modal.LoginModal>
        </div>
    )
}

export default OnLogin;