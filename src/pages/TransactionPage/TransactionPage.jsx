import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import StyledInput from "../../components/StyledInput";
import StyledButton from "../../components/StyledButton";
import apiTransactions from "../../services/apiTransactions";
import StyledSubtitle from "../../components/StyledSubtitle";
import { LeftAlignedContainer } from "../../styles/LeftAlignedContainer";
import { handleForm } from "../../functions/controlledInputFunctions";
import showErrorMsg from "../../constants/objectErros";

export default function TransactionUpdatePage() {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [form, setForm] = useState({ valor: undefined, descricao: "" });
    const tipo = useLocation().pathname.split("/")[useLocation().pathname.split("/").length - 1];

    useEffect(() => {

        if (user === null) return navigate("/");
    }, []);

    function handleNewOperation(e) {
        e.preventDefault();

        const formConverted = { ...form, valor: Number(form.valor) }
        apiTransactions.createTransaction(formConverted, tipo, user.token)
            .then(() => {
                navigate("/home");
            })
            .catch((err) => {
                showErrorMsg(err.response.status);
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
                    onChange={(e) => handleForm(e, form, setForm)}
                    data-test={`registry-amount-input`} />
                <StyledInput
                    name="descricao"
                    value={form.descricao}
                    required
                    type="text"
                    placeholder="Descrição"
                    onChange={(e) => handleForm(e, form, setForm)}
                    data-test="registry-name-input" />
                <StyledButton data-test="registry-save" type="submit">Salvar {(tipo === "entrada") ? "entrada" : "saída"}</StyledButton>
            </form>
        </LeftAlignedContainer >
    )
}