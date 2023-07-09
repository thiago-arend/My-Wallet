import styled from "styled-components";

export const Container = styled.div`
    width: 375px;
    margin: 0 auto;
    padding: 15px 22px;
    align-items: center;
    background-color: #8C11BE;

    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const OperationLinksContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const TransactionsHistoryContainer = styled.div`
    position: relative;
    width: 100%;
    height: 446px;
    padding: 12px;
    background-color: #FFF;
    border-radius: 8px;
    border: 1px solid #FFF;
    margin-bottom: 14px;
`;

export const MessageHistory = styled.div`
    position: absolute;
    width: 180px;
    top: 270px;
    left: 90px;
    height: 46px;
    line-height: 25px;

    font-size: 20px;
    font-family: 'Raleway', sans-serif;
    color: #868686;
    text-align: center;
`;