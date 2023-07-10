import { SaldoContainer } from "./styled";

export default function Saldo({ saldo }) {
    return (
        <SaldoContainer saldo={saldo}>
            <span>SALDO</span>
            <span>{(saldo / 100).toFixed(2)}</span>
        </SaldoContainer>
    );
}