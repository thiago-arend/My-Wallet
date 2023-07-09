import { useNavigate } from "react-router-dom";
import StyledButton from "../../components/StyledButton";
import StyledInput from "../../components/StyledInput";
import StyledLink from "../../components/StyledLink";
import StyledTitle from "../../components/StyledTitle";
import { VerticalCenterContainer } from "../../styles/VerticalCenterContainer";
import apiAuth from "../../services/apiAuth";
import { useState } from "react";

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
                switch (err.response.status) {
                    case 409:
                        alert("Usuário já cadastrado! Use outro e-mail.");
                        break;
                    case 422:
                        alert("Formato dos dados é inválido! (use uma senha mínima de 3 caracteres");
                        break;
                    case 500:
                        alert("Erro interno!");
                }
            });
    }

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
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
                    onChange={handleForm} />
                <StyledInput
                    type="email"
                    name="email"
                    value={form.email}
                    required
                    placeholder="E-mail"
                    onChange={handleForm} />
                <StyledInput
                    type="password"
                    name="senha"
                    value={form.senha}
                    required
                    placeholder="Senha"
                    onChange={handleForm} />
                <StyledInput
                    type="password"
                    name="confirm"
                    value={form.confirm}
                    required
                    placeholder="Confirme a senha"
                    onChange={handleForm} />
                <StyledButton type="submit">Cadastrar</StyledButton>
            </form>
            <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
        </VerticalCenterContainer>
    );
}