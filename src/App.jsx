import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import TransactionPage from "./pages/TransactionPage/TransactionPage";
import HomePage from "./pages/HomePage/HomePage";
import UserProvider from "./contexts/UserContext";
import TransactionProvider from "./contexts/TransactionContext";
import TransactionUpdatePage from "./pages/TransactionUpdatePage/TransactionUpdatePage";

export default function App() {
  // https://projeto14-mywallet-back-2syy.onrender.com
  // http://localhost:5000
  return (
    <BrowserRouter>
      <UserProvider>
        <TransactionProvider>
          <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="/cadastro" element={<SignUpPage />} />
            <Route path="/nova-transacao/:tipo" element={<TransactionPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/editar-registro/:tipo/:id" element={<TransactionUpdatePage />} />
          </Routes>
        </TransactionProvider>
      </UserProvider>
    </BrowserRouter>
  );
}