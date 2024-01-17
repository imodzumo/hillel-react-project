import {createContext, useState} from "react";


export const LoginContext = createContext(null);
LoginContext.displayName = "LoginContext"

const LoginInfoContext = ({ children })=> {

    const [user, setUser] = useState('');


    return (
        <LoginContext.Provider value={{user, setUser}}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginInfoContext
