import styled from "styled-components";

export const OperationLinkCard = styled.div`
    width: 155px;
    height: 114px;
    padding: 5px;
    background-color: #A328D6;
    border: 1px solid #A328D6;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;

    ion-icon {
        color: #fff;
        width: 25px;
        height: 25px;
    }

    p {
        font-size: 17px;
        font-weight: bold;
        color: #FFF;
        font-family: 'Raleway', sans-serif;
    }
`;