import React, { use } from 'react';
// import { AuthContext } from '../contexts/AuthContext/AuthContext';
import {AuthContext} from '../Context/AuthContext/AuthContext'
const useAuth = () => {
    const authInfo = use(AuthContext);
    return authInfo;
};

export default useAuth;