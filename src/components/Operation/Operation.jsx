import OperationContainer from "./styled"
import dayjs from "dayjs";

export default function Operation(props) {
    const {valor, descricao, tipo, timestamp} = props.operation;

    return (
        <OperationContainer tipo={tipo}>
            <div>
                <span>{dayjs(timestamp).format("DD/MM")}</span>
                <span>{descricao}</span>
            </div>
            <div>
                <span>{(valor / 100).toFixed(2)}</span>
                <ion-icon name="close-outline"></ion-icon>
            </div>
        </OperationContainer>
    )
}