import { useNavigate } from "react-router-dom";
import StyledButton from "../../components/StyledButton";
import StyledInput from "../../components/StyledInput";
import StyledLink from "../../components/StyledLink";
import StyledTitle from "../../components/StyledTitle";
import { Container } from "../../styles/Container";

export default function SignUpPage() {
    const navigate = useNavigate();

    function handleCadastro(e) {
        e.preventDefault();

        navigate("/");
    }

    return (
        <Container>
            <StyledTitle>MyWallet</StyledTitle>
            <form onSubmit={handleCadastro}>
            <StyledInput type="text" placeholder="Nome"/>
                <StyledInput type="email" placeholder="E-mail"/>
                <StyledInput ype="password" placeholder="Senha"/>
                <StyledInput type="password" placeholder="Confirme a senha"/>
                <StyledButton>Cadastrar</StyledButton>
            </form>
            <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
        </Container>
    )
}