import {createContext, useState} from "react";


export const LoginContext = createContext(null);
LoginContext.displayName = "LoginContext"

const LoginInfoContext = ({ children })=> {

    const [users, setUsers] = useState([]);


    return (
        <LoginContext.Provider value={{users, setUsers}}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginInfoContext
