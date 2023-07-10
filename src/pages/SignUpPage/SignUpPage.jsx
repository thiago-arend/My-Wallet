import { useNavigate } from "react-router-dom";
import StyledButton from "../../components/StyledButton";
import StyledInput from "../../components/StyledInput";
import StyledLink from "../../components/StyledLink";
import StyledTitle from "../../components/StyledTitle";
import { VerticalCenterContainer } from "../../styles/VerticalCenterContainer";
import apiAuth from "../../services/apiAuth";
import { useState } from "react";
import { handleForm } from "../../functions/controlledInputFunctions";
import showErrorMsg from "../../constants/objectErros";

export default function SignUpPage() {
    const [form, setForm] = useState({ nome: "", email: "", senha: "", confirm: "" });
    const navigate = useNavigate();

    function handleCadastro(e) {
        e.preventDefault();

        if (!passwordMatch(form.senha, form.confirm)) return alert("As senhas não são idênticas.");

        const formCpy = { ...form }; // copia para poder apagar confirm
        delete formCpy.confirm;

        apiAuth.signUp(formCpy)
            .then(() => {
                navigate("/");
            })
            .catch(err => {
                showErrorMsg(err.response.status);
            });
    }

    function passwordMatch(p1, p2) {
        return p1 && p2 && p1 === p2;
    }

    return (
        <VerticalCenterContainer>
            <StyledTitle>MyWallet</StyledTitle>
            <form onSubmit={handleCadastro}>
                <StyledInput
                    type="text"
                    name="nome"
                    value={form.nome}
                    required
                    placeholder="Nome"
                    onChange={(e) => handleForm(e, form, setForm)}
                    data-test="name" />
                <StyledInput
                    type="email"
                    name="email"
                    value={form.email}
                    required
                    placeholder="E-mail"
                    onChange={(e) => handleForm(e, form, setForm)}
                    data-test="email" />
                <StyledInput
                    type="password"
                    name="senha"
                    value={form.senha}
                    required
                    placeholder="Senha"
                    onChange={(e) => handleForm(e, form, setForm)}
                    data-test="password"  />
                <StyledInput
                    type="password"
                    name="confirm"
                    value={form.confirm}
                    required
                    placeholder="Confirme a senha"
                    onChange={(e) => handleForm(e, form, setForm)}
                    data-test="conf-password" />
                <StyledButton data-test="sign-up-submit" type="submit">Cadastrar</StyledButton>
            </form>
            <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
        </VerticalCenterContainer>
    );
}