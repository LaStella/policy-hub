import { Footer, Header, Input, Spacer, Text, Card } from "../../components";
import { useState } from "react";

const NotLoginPage = () => {
    const [visible, setVisible] = useState(false);

    return (
        <Spacer type="vertical">
            <div>
                <Header />
            </div>
            <center>
                <Text text-align="center" size={48} strong={true} block={true}>찾는 정책이 있나요?</Text>
            </center>
            <center>
                <Input.MainInput placeholder="🔍︎ 검색어를 입력하세요." />
            </center>
            <center>
                <Card.CardContainer></Card.CardContainer>
            </center>
            <center>
                <Footer />
            </center>
        </Spacer>
    )
}

export default NotLoginPage;