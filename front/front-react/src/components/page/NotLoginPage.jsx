import Header from "../base/Header";
import Input from "../base/Input";
import Spacer from "../base/Spacer";
import Text from "../base/Text";

const NotLoginPage = () => {
    return (
        <Spacer type="vertical">
            <div>
                <Header />
            </div>
            <center>
                <Text text-align="center" size={48} strong={true} block={true}>찾는 정책이 있나요?</Text>
            </center>
            <center>
                <Input.MainInput placeholder="🔍 검색어를 입력하세요." />
            </center>
        </Spacer>
    )
}

export default NotLoginPage;