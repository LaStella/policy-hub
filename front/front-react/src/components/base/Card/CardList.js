import IndividualCard from "./Card";
import styled from "@emotion/styled";
import Flux from "../Flux";

const { Row, Col } = Flux;

const CategoryStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10vw 0 5vw;
    width: 30vw;
    height: 8vh;
    box-sizing: border-box;
    background: #DBD2D1;
    border: 1px solid #000000;
    border-radius: 20px;
    font-family: 'Noto Serif Thai';
    font-style: normal;
    font-size: 2vw;
    color: #000000;
`

const CardList = () => {
    return (
        <div>
            <CategoryStyle>청년 맞춤형 복지</CategoryStyle>
            <Row gutter={[0, 40]}>
                <Col span={3}><IndividualCard /></Col>
                <Col span={3}><IndividualCard /></Col>
                <Col span={3}><IndividualCard /></Col>
                <Col span={3}><IndividualCard /></Col>
                <Col span={3}><IndividualCard /></Col>
                <Col span={3}><IndividualCard /></Col>
                <Col span={3}><IndividualCard /></Col>
                <Col span={3}><IndividualCard /></Col>
            </Row>
        </div>
    )
}

export default CardList;