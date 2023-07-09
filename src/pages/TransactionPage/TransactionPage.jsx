import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

export default function TransactionPage() {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {

        if (user === null) {
            return navigate("/");
        }

        /*apiTranscations.getTransactions(user.token)
            .then((res) => {
                setTransactions(res.data);
            })
            .catch((err) => {
                console.log(err.response.data);
            });*/

    }, []);

    return (
        <>
            TransactionPage
        </>
    )
}