import styled from '@emotion/styled';
import { Image, Modal } from '../../../components';
import { useState } from 'react';


const CardForm = styled.div`
    height: 30vh;
    width: 20vw;
    box-sizing: border-box;
    background: #A9C5B9;
    border: 1px solid #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
`;

const TagStyle = styled.div`
    margin: 2vh 2vw 2vh 2vw;
    height: 3vh;
    width: 5vw;
    box-sizing: border-box;
    background: rgba(0, 0, 0, 0.45);
    border: 1px solid #000000;
    border-radius: 30px;
    font-family: 'Noto Serif Thai';
    color: #FFFFFF;
    font-size: 0.9vw;
`;

const PolicyNameBox = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1vh 1vw 1vh 1vw;
    height: 16vh;
    width: 17vw;
    background-color: #D9D9D9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    font-family: 'Noto Serif Thai';
    font-style: normal;
    font-size: 1.5vw;
    font-weight: bold;
    line-height: 32px;
    color: #000000;
    cursor: pointer;
`;

const LogoStyle = styled(Image)`
    margin: 1rem 1vw 1vh 1vw;
    border: 1px solid #000000;
    border-radius: 5px;
`;

const IndividualCard = ({ policy }) => {
    const [visible, setVisible] = useState(false);

    return (
        <CardForm>
            <center>
                <TagStyle>{policy.tag}</TagStyle>
            </center>
            <center>
                <PolicyNameBox onClick={() => setVisible(true)}>
                    {policy.name}
                </PolicyNameBox>
                <Modal.PolicyExplainModal visible={visible} onClose={() => setVisible(false)} onClick={() => setVisible(false)} />
            </center>
            <center>
                <LogoStyle src={'images/국토교통부.svg'} />
            </center> 
        </CardForm>
    )
};

export default IndividualCard;