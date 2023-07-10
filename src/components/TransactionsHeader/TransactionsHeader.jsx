import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import StyledTransactionTitle from "../StyledTransactionTitle";
import StyledHeader from "./styled";
import { useNavigate } from "react-router-dom";

export default function TransactionsHeader(props) {
    const {userName} = props;
    const {setUser} = useContext(UserContext);
    const navigate = useNavigate();

    function logout() {
        localStorage.removeItem("user");
        setUser({});
        navigate("/");
    }

    return (
        <StyledHeader>
            <StyledTransactionTitle data-test="user-name">Olá, {userName}</StyledTransactionTitle>
            <ion-icon onClick={logout} name="exit-outline" data-test="logout"></ion-icon>
        </StyledHeader>
    );
}