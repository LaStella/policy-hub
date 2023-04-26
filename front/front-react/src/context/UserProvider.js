import { createContext, useCallback, useContext, useEffect, useReducer } from "react";

const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);

const reducer = (state, action) => {
    switch (action.type) {
        case 'INIT_USERS': {
            return action.payload
        }
        case 'ADD_USER': {
            return [...state, action.payload]
        }
        case 'SEARCH_USER': {
            const payload = action.payload;
            return state.filter(item => item.id !== payload.id);
        }
        default: {
            console.error('Wrong type');
            break;
        }
    }
}

const UserProvider = ({ children, initialUsers, handleSearchUser, handleAddUser }) => {
    const [users, dispatch] = useReducer(reducer, initialUsers || []);

    useEffect(() => {
        dispatch({ type: 'INIT_USERS', payload: initialUsers || [] });
    }, [initialUsers]);

    const onAddUser = useCallback(async (user) => {
        const payload = await handleAddUser(user);
        dispatch({ type: 'ADD_USER', payload });
    }, [handleAddUser])

    const onSearchUser = useCallback(async (id) => {
        const payload = await handleSearchUser(id);
        dispatch({ type: 'SEARCH_USER', payload });
    }, [handleSearchUser])

    return (
        <UserContext.Provider value={{ users, onSearchUser, onAddUser }}>
            {children}
        </UserContext.Provider>
    )
};

export default UserProvider;