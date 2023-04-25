import styled from "@emotion/styled";
import Text from "../Text";
import './footer.css'

const FooterStyled = styled(Text)`
    display: flex;
    justify-content: center;
    margin-top: 20vh;
    align-items: center;
    font-family: 'Helvetica Neue';
    font-size: 1rem;
    font-weight: bold;
`

const Footer = () => {
    return (
        <div>
            <FooterStyled>
                <div class = "MainLogo"></div> 
                ☆ 함진규 | 박영규 | 편민준 | 나혜수 ☆
            </FooterStyled>
        </div>
    )
}

export default Footer;