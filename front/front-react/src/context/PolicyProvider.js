import { createContext, useCallback, useContext, useEffect, useReducer } from "react";

const PolicyContext = createContext();
export const usePolicyContext = () => useContext(PolicyContext);

const reducer = (state, action) => {
    switch (action.type) {
        case 'INIT_POLICIES': {
            return action.payload
        }
        case 'ADD_POLICY': {
            return [...state, action.payload]
        }
        case 'SEARCH_POLICY': {
            const payload = action.payload;
            return state.filter(item => item.id !== payload.id);
        }
        default: {
            console.error('Wrong type');
            break;
        }
    }
}

const PolicyProvider = ({ children, initialPolicies, handleSearchPolicy, handleAddPolicy }) => {
    const [policies, dispatch] = useReducer(reducer, initialPolicies || []);

    useEffect(() => {
        dispatch({ type: 'INIT_POLICIES', payload: initialPolicies || [] });
    }, [initialPolicies]);

    const onAddPolicy = useCallback(async (policy) => {
        const payload = await handleAddPolicy(policy);
        dispatch({ type: 'ADD_POLICY', payload });
    }, [handleAddPolicy])

    const onSearchPolicy = useCallback(async (id) => {
        const payload = await handleSearchPolicy(id);
        dispatch({ type: 'SEARCH_Policy', payload });
    }, [handleSearchPolicy])

    return (
        <PolicyContext.Provider value={{ policies, onSearchPolicy, onAddPolicy }}>
            {children}
        </PolicyContext.Provider>
    )
};

export default PolicyProvider;