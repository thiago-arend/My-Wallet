import { useContext } from "react";
import apiTranscations from "../../services/apiTransactions";
import OperationContainer from "./styled"
import dayjs from "dayjs";
import { UserContext } from "../../contexts/UserContext";
import { TransactionContext } from "../../contexts/TransactionContext";
import { Link } from "react-router-dom";
import showErrorMsg from "../../constants/objectErros";

export default function Operation(props) {
    const { _id, valor, descricao, tipo, timestamp } = props.operation;
    const { token } = useContext(UserContext).user;
    const { transactions, setTransactions } = useContext(TransactionContext);

    function deleteTransaction(id) {
        if (!confirm("Deseja realmente apagar essa operação?")) return;

        apiTranscations.deleteTransaction(id, token)
            .then(() => {
                setTransactions(transactions.filter(t => t._id !== id));
            })
            .catch(err => {
                showErrorMsg(err.response.status);
            });
    }

    return (
        <OperationContainer tipo={tipo}>
            <div>
                <span>{dayjs(timestamp).format("DD/MM")}</span>
                <Link to={`/editar-registro/${tipo}/${_id}`}><span>{descricao}</span></Link>
            </div>
            <div>
                <span>{(valor / 100).toFixed(2)}</span>
                <ion-icon onClick={() => { deleteTransaction(_id) }} name="close-outline"></ion-icon>
            </div>
        </OperationContainer>
    )
}