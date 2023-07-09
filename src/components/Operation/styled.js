import styled from "styled-components";

const OperationContainer = styled.div`
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    font-size: 16px;
    font-family: 'Raleway', sans-serif;

    > :nth-child(1) {
        display: flex;
        justify-content: space-between;

        :nth-child(1) {
            margin-right: 6px;
            color: #C6C6C6;
        }
        :nth-child(2) {
            color: #000;
        }   
    }

    > :nth-child(2) {
        :nth-child(1) {
            margin-right: 6px;
            color: ${props => (props.tipo === "entrada") ? "#03AC00" : "#C70000"};
        }
        :nth-child(2) {
            color: #C6C6C6;
            width: 20px;
            height: 20px;
        }
        
        display: flex;
        justify-content: space-between;
        align-items: center;
        
    }
`;

export default OperationContainer;