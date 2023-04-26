import CardList from "./CardList";
import axios from 'axios';
import { useAsync } from '../../../hooks';
import { Spinner } from '../../../components';
import PolicyProvider from '../../../context/PolicyProvider';

const CardContainer = () => {
    const initialPolicies = useAsync(async () => {
        return await axios
        .get('http://127.0.0.1:9000/policy-service')
        .then(response => response.data);
    }, []);

    return (
        <PolicyProvider initialPolicies={initialPolicies.value}>
            <div>
                {initialPolicies.isLoading ?  <Spinner /> : <CardList />}
            </div>
        </PolicyProvider>
    )
}

export default CardContainer;