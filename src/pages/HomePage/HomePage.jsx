import { Link, useNavigate } from "react-router-dom";
import OperationLink from "../../components/OperationLink/OperationLink";
import TransactionsHeader from "../../components/TransactionsHeader/TransactionsHeader";
import { Container, MessageHistory, OperationLinksContainer, TransactionsHistoryContainer } from "./styled";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import apiTranscations from "../../services/apiTransactions";
import Operation from "../../components/Operation/Operation";
import Saldo from "../../components/Saldo/Saldo";

export default function HomePage() {
    const { user } = useContext(UserContext);
    const [transactions, setTransactions] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        if (user === null) {
            return navigate("/");
        }

        apiTranscations.getTransactions(user.token)
            .then((res) => {
                setTransactions(res.data);
            })
            .catch((err) => {
                console.log(err.response.data);
            });

    }, []);

    function calculaSaldo() {
        let transCpy = [...transactions];
        let total = 0;
        transCpy.forEach(t => {
            if (t.tipo === "entrada") total += t.valor;
            if (t.tipo === "saida") total -= t.valor;
        });

        return total;
    }

    return (
        <Container>
            <TransactionsHeader userName={user ? user.nome : "____"} />

            <TransactionsHistoryContainer>
                {
                    (!transactions)
                        ?
                        <MessageHistory>Não há registros de entrada ou saída</MessageHistory>
                        :
                        transactions.map(t => <Operation operation={t} key={t._id}/>)
                }
                {
                    (transactions) && <Saldo saldo={calculaSaldo()}/>
                }

            </TransactionsHistoryContainer>

            <OperationLinksContainer>
                <Link to="/nova-transacao/entrada"><OperationLink icone="add-circle-outline" texto="Nova entrada" /></Link>
                <Link to="/nova-transacao/saida"><OperationLink icone="remove-circle-outline" texto="Nova saída" /></Link>
            </OperationLinksContainer>
        </Container>
    )
}