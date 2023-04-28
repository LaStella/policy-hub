import { createContext, useCallback, useContext, useEffect, useReducer } from "react";

const PolicyContext = createContext();
export const usePolicyContext = () => useContext(PolicyContext);

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

const PolicyProvider = ({ children, initialPolicies, handleAddPolicy }) => {
    const [policies, dispatch] = useReducer(reducer, initialPolicies || []);

    useEffect(() => {
        dispatch({ type: 'GET', payload: initialPolicies || [] });
    }, [initialPolicies]);

    const onAddPolicy = useCallback(async (policy) => {
        const payload = await handleAddPolicy(policy);
        dispatch({ type: 'POST', payload });
    }, [handleAddPolicy])

    return (
        <PolicyContext.Provider value={{ policies, onAddPolicy }}>
            {children}
        </PolicyContext.Provider>
    )
};

export default PolicyProvider;