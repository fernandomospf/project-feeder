import React, { useState } from 'react';
import Context from "./index";

function Provider({children}) {
  const [username, setUsename] = useState('');
  const [token, setToken] = useState('');
  const [description, setDescription] = useState('');
  const [gif, setGif] = useState('')
  const [module, setModule] = useState('fundamentals');
  const [nameProject, setNameProject] = useState('');
  const [repository, setRepository ] = useState('');
  const [videoPlayer, setVideoPlayer] = useState('');

  const myContext = {
    username,
    setUsename,
    token,
    setToken,
    description,
    setDescription,
    gif,
    setGif,
    module,
    setModule,
    nameProject,
    setNameProject,
    repository,
    setRepository,
    videoPlayer,
    setVideoPlayer,
  };

  return(
    <Context.Provider value={myContext}>
      {children}
    </Context.Provider>
  );
}

export default Provider;