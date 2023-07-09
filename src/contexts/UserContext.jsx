import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export default function UserProvider({ children }) {
    const lsUser = localStorage.getItem("user");
    const [user, setUser] = useState(JSON.parse(lsUser));
    //const [user, setUser] = useState(lsUser);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}