import { createContext, useCallback, useContext, useEffect, useReducer } from "react";

const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);

const reducer = (state, action) => {
    switch (action.type) {
        case 'GET': {
            return action.payload
        }
        case 'POST': {
            return [...state, action.payload]
        }
        default: {
            console.error('Wrong type');
            break;
        }
    }
}

const UserProvider = ({ children, initialUsers, handleAddUser }) => {
    const [users, dispatch] = useReducer(reducer, initialUsers || []);

    useEffect(() => {
        dispatch({ type: 'GET', payload: initialUsers || [] });
    }, [initialUsers]);

    const onAddUser = useCallback(async (user) => {
        const payload = await handleAddUser(user);
        dispatch({ type: 'POST', payload });
    }, [handleAddUser])

    return (
        <UserContext.Provider value={{ users, onAddUser }}>
            {children}
        </UserContext.Provider>
    )
};

export default UserProvider;