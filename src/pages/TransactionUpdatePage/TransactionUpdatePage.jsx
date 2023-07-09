import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { Container } from "../../styles/Container";
import StyledInput from "../../components/StyledInput";
import StyledButton from "../../components/StyledButton";
import apiTransactions from "../../services/apiTransactions";
import StyledSubtitle from "../../components/StyledSubtitle";

export default function TransactionUpdatePage() {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [form, setForm] = useState({ valor: undefined, descricao: "" });

    const locationSplit = useLocation().pathname.split("/");
    const tipo = locationSplit[locationSplit.length - 2];
    const id = locationSplit[locationSplit.length - 1];

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
        
        const formConverted = { ...form, valor: Number(form.valor) }
        apiTransactions.updateTransaction(formConverted, tipo, id, user.token)
            .then(() => {
                navigate("/home");
            })
            .catch((err) => {
                switch (err.response.status) {
                    case 401:
                        alert("Usuário não autenticado!");
                        break;
                    case 422:
                        console.log(err.response.data);
                        alert("Formato dos dados é inválido!");
                        break;
                    case 500:
                        alert("Erro interno!");
                }
            });
    }

    return (
        <Container>
            <StyledSubtitle>Editar {(tipo === "entrada") ? "entrada" : "saída"}</StyledSubtitle>
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
                <StyledButton type="submit">Atualizar {(tipo === "entrada") ? "entrada" : "saída"}</StyledButton>
            </form>
        </Container >
    )
}