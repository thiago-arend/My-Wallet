import { SaldoContainer } from "./styled";

export default function Saldo({ saldo }) {
    const saldoConverted = Math.abs(saldo.toFixed(2)).toString().replace(".", ",");

    return (
        <SaldoContainer saldo={saldo}>
            <span>SALDO</span>
            <span data-test="total-amount">{saldoConverted}</span>
        </SaldoContainer>
    );
}