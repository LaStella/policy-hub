import Modal from "./index";
import { Text, Button, Spacer, Toast } from "../../../components"
import styled from "@emotion/styled";

const ModalPolicyNameBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 22.8009vw;
    height: 9.8380vw;
    font-size: 1.3148vw;
    font-family: 'Noto Serif Thai';
    font-weight: bold;

    background: #DBD2D1;
    border: 1px solid #000000;
    border-radius: 20px;
`

const BookMarkButton = styled.button`
    position: absolute;
    width: 4.6296vw;
    height: 4.6296vw;
    left: 20.7176vw;
    top: 0.2894vw;
    background: #FFFFFF;
    border: 1px solid #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50%;
    text-align: center;
    font-size: 2.5vw;
    cursor: pointer;
`

const PolicyExplainModal = ({ visible, onClose, onClick, ...props}) => {
    return (
        <div>
            <Modal.Base visible={visible} onClose={onClose}>
                <div>
                    <Spacer type="vertical">
                        <center>
                            <ModalPolicyNameBox>정책 이름</ModalPolicyNameBox>
                        </center>
                        <BookMarkButton onClick={() => Toast.show("즐겨찾기에 저장하였습니다.", 3000)} >⭐</BookMarkButton>
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
};

export default PolicyExplainModal;