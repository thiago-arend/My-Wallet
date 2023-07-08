import { useNavigate } from "react-router-dom";
import StyledButton from "../../components/StyledButton";
import StyledInput from "../../components/StyledInput";
import StyledLink from "../../components/StyledLink";
import StyledTitle from "../../components/StyledTitle";
import { Container } from "../../styles/Container";

export default function SignInPage() {
    const navigate = useNavigate();
    
    function handleLogin(e) {
        e.preventDefault();

        navigate("/home");
    }

    return (
        <Container>
            <StyledTitle>MyWallet</StyledTitle>
            <form onSubmit={handleLogin}>
                <StyledInput type="email" placeholder="E-mail"/>
                <StyledInput ype="password" placeholder="Senha"/>
                <StyledButton>Entrar</StyledButton>
            </form>
            <StyledLink to="/cadastro">Primeira vez? Cadastre-se!</StyledLink>
        </Container>
    )
}