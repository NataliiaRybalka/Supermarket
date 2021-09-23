import React, { useState } from 'react';

import { UserContext } from '.';
import { httpRequest } from '../helpers';
import { URL } from '../constants/constants';

export default function UserContextProvider({children}) {
  const { request } = httpRequest();

  const [user, setUser] = useState();

  const userRequestLogin = async (route, method, body = null) => {
    const data = await request(`${URL}account/${route}`, method, { body });
    setUser(data.user);

    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);
    localStorage.setItem('userId', data.user._id);
  };

  const userRequestLogout = async (route, method, body = null, token) => {
    await request(`${URL}account/${route}`, method, { body }, { 'Authorization': token });
    setUser(null);
    
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userId');
  };

  const userRequest = async (route) => {
    const data = await request(`${URL}account/${route}`, 'GET');
    setUser(data);
  };

  return (
    <UserContext.Provider value={{
      user,
      userRequestLogin,
      userRequestLogout,
      userRequest
    }}>
      {children}
    </UserContext.Provider>
  )
}
