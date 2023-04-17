import Header from "../base/Header";
import Input from "../base/Input";
import Spacer from "../base/Spacer";
import Text from "../base/Text";

function Space({ children }) {
    return (
        <div>
            <Spacer type="vertical">{children}</Spacer>
        </div>
    )
}

const NotLoginPage = () => {
    return (
        <Space>
            <Header />
            <Text size={48} strong={true} block={true}>찾는 정책이 있나요?</Text>
            <Input placeholder="💡 검색어를 입력하세요."></Input>
        </Space>
    )
}

export default NotLoginPage;