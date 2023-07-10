import { OperationLinkCard } from "./styled";

export default function OperationLink({ icone, texto }) {
    return (
        <OperationLinkCard data-test={(texto === "Nova entrada") ? "new-income" : "new-expense"}>
            <ion-icon name={icone}></ion-icon>
            <p>{texto}</p>
        </OperationLinkCard>
    )
}