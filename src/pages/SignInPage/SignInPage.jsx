import { useNavigate } from "react-router-dom";
import StyledButton from "../../components/StyledButton";
import StyledInput from "../../components/StyledInput";
import StyledLink from "../../components/StyledLink";
import StyledTitle from "../../components/StyledTitle";
import { VerticalCenterContainer } from "../../styles/VerticalCenterContainer";
import apiAuth from "../../services/apiAuth";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { handleForm } from "../../functions/controlledInputFunctions";
import showErrorMsg from "../../constants/objectErros";

export default function SignInPage() {
    const { setUser } = useContext(UserContext);
    const [form, setForm] = useState({ email: "", senha: "" });
    const navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault();

        apiAuth.login(form)
            .then(res => {
                setUser(res.data); // id, nome, senha
                localStorage.removeItem("user");
                localStorage.setItem("user", JSON.stringify(res.data));

                navigate("/home");
            })
            .catch(err => {
                showErrorMsg(err.response.status);
            });
    }

    return (
        <VerticalCenterContainer>
            <StyledTitle>MyWallet</StyledTitle>
            <form onSubmit={handleLogin}>
                <StyledInput
                    name="email"
                    value={form.email}
                    required
                    type="email"
                    placeholder="E-mail"
                    onChange={(e) => handleForm(e, form, setForm)} />
                <StyledInput
                    name="senha"
                    value={form.senha}
                    required
                    type="password"
                    placeholder="Senha"
                    onChange={(e) => handleForm(e, form, setForm)} />
                <StyledButton type="submit">Entrar</StyledButton>
            </form>
            <StyledLink to="/cadastro">Primeira vez? Cadastre-se!</StyledLink>
        </VerticalCenterContainer>
    )
}