import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { VerticalCenterContainer } from "../../styles/VerticalCenterContainer";
import StyledInput from "../../components/StyledInput";
import StyledButton from "../../components/StyledButton";
import apiTransactions from "../../services/apiTransactions";
import StyledSubtitle from "../../components/StyledSubtitle";
import { LeftAlignedContainer } from "../../styles/LeftAlignedContainer";

export default function TransactionUpdatePage() {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [form, setForm] = useState({ valor: undefined, descricao: "" });
    const tipo = useLocation().pathname.split("/")[useLocation().pathname.split("/").length - 1];
    console.log(form);

    useEffect(() => {

        if (user === null) {
            return navigate("/");
        }
    }, []);

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleNewOperation(e) {
        e.preventDefault();

        const formConverted = {...form, valor: Number(form.valor)}
        apiTransactions.createTransaction(formConverted, tipo, user.token)
        .then(() => {
            navigate("/home");
        })
        .catch((err) => {
            switch (err.response.status) {
                case 401:
                    alert("Usuário não autenticado!");
                    break;
                case 422:
                    alert("Formato dos dados é inválido!");
                    break;
                case 500:
                    alert("Erro interno!");
            }
        });
    }

    return (
        <LeftAlignedContainer>
            <StyledSubtitle>Nova {(tipo === "entrada") ? "entrada" : "saída"}</StyledSubtitle>
            <form onSubmit={handleNewOperation}>
                <StyledInput
                    name="valor"
                    value={form.valor}
                    step={0.01}
                    min={0.01}
                    required
                    type="number"
                    placeholder="Valor"
                    onChange={handleForm} />
                <StyledInput
                    name="descricao"
                    value={form.descricao}
                    required
                    type="text"
                    placeholder="Descrição"
                    onChange={handleForm} />
                <StyledButton type="submit">Salvar {(tipo === "entrada") ? "entrada" : "saída"}</StyledButton>
            </form>
        </LeftAlignedContainer >
    )
}