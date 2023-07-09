import { useContext } from "react";
import apiTranscations from "../../services/apiTransactions";
import OperationContainer from "./styled"
import dayjs from "dayjs";
import { UserContext } from "../../contexts/UserContext";
import { TransactionContext } from "../../contexts/TransactionContext";
import { Link } from "react-router-dom";

export default function Operation(props) {
    const { _id, valor, descricao, tipo, timestamp } = props.operation;
    const { token } = useContext(UserContext).user;
    const { setTransactions } = useContext(TransactionContext);

    function deleteTransaction(id) {
        if (!confirm("Deseja realmente apagar essa operação?")) return;

        apiTranscations.deleteTransaction(id, token)
            .then(() => {

                apiTranscations.getTransactions(token)
                    .then((res) => {
                        setTransactions(res.data);
                    })
                    .catch((err) => {
                        console.log(err.response.data);
                    });
            })
            .catch(err => {
                console.log(err.response.status);
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