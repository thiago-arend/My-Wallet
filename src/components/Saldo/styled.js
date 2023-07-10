import styled from "styled-components";

export const SaldoContainer = styled.div`
    position: fixed;
    z-index: 2;
    top: 560px;
    height: 25px;
    width: 306px;
    background-color: #FFF;
    border-radius: 8px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 17px;
    font-family: 'Raleway', sans-serif;

    :nth-child(1) {
        font-weight: bold;
    }
    :nth-child(2) {
        color: ${props => (props.saldo > 0) ? "#03AC00" : "#C70000"};
    }
`;