import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import TransactionPage from "./pages/TransactionPage/TransactionPage";
import HomePage from "./pages/HomePage/HomePage";
import UserProvider from "./contexts/UserContext";

export default function App() {

  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route path="/nova-transacao/:tipo" element={<TransactionPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}