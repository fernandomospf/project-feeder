import React, { useState } from 'react';
import Context from "./index";

function Provider({children}) {
  const [username, setUsename] = useState('');
  const [token, setToken] = useState('');

  const myContext = {
    username,
    setUsename,
    token,
    setToken,
  };

  return(
    <Context.Provider value={myContext}>
      {children}
    </Context.Provider>
  );
}

export default Provider;