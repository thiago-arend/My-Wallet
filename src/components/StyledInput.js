import styled from "styled-components";

const StyledInput = styled.input`
    width: 100%;
    height: 58px;
    background-color: #FFF;
    border: 1px solid #FFF;
    border-radius: 5px;
    margin-bottom: 12px;
    padding: 0 20px;

    &::placeholder {
        font-size: 20px;
        color: #000;
        font-family: 'Raleway', sans-serif;
    }
`;

export default StyledInput;