import { SaldoContainer } from "./styled";

export default function Saldo({ saldo }) {
    return (
        <SaldoContainer saldo={saldo}>
            <span>SALDO</span>
            <span data-test="total-amount">{Math.abs(saldo.toFixed(2))}</span>
        </SaldoContainer>
    );
}