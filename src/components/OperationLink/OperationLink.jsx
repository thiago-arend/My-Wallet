import { OperationLinkCard } from "./styled";

export default function OperationLink({ icone, texto }) {
    return (
        <OperationLinkCard>
            <ion-icon name={icone}></ion-icon>
            <p>{texto}</p>
        </OperationLinkCard>
    )
}