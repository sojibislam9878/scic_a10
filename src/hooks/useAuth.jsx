
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const useAuth = () => {
    const all = useContext(AuthContext)
    console.log(all);
    return all
};

export default useAuth;