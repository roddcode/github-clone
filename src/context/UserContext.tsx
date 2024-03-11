/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';
import { GitHubUser } from '../types';

// Definir el estado inicial
const initialUserState = {
  user: {} as GitHubUser,
  search: 'roddcode',
  repos: [],
  followers: [],
  forks: [],
  following: [],
  tab: 'repos',
};

// Crear el contexto
const UserContext = createContext(initialUserState);

// Proveedor del contexto
const UserProvider = ({ children }) => {
  
  const [userState, setUserState] = useState(initialUserState);

  const setUser = (userData) => {
    setUserState((prevUserState) => ({ ...prevUserState, user: userData }));
  };

  const setSearch = (newSearch) => {
    setUserState((prevUserState) => ({ ...prevUserState, search: newSearch }));
  };

  const setRepos = (newRepos) => {
    setUserState((prevUserState) => ({ ...prevUserState, repos: newRepos }));
  };

  const setFollowers = (newFollowers) => {
    setUserState((prevUserState) => ({ ...prevUserState, followers: newFollowers }));
  };

  const setForks = (newForks) => {
    setUserState((prevUserState) => ({ ...prevUserState, forks: newForks }));
  };

  const setFollowing = (newFollowing) => {
    setUserState((prevUserState) => ({ ...prevUserState, following: newFollowing }));
  };

  const setTab = (newTab) => {
    setUserState((prevUserState) => ({ ...prevUserState, tab: newTab }));
  };

  return (
    <UserContext.Provider
      value={{
        ...userState,
        setUser,
        setSearch,
        setRepos,
        setFollowers,
        setForks,
        setFollowing,
        setTab,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser debe usarse dentro de un UserProvider');
  }
  return context;
};

export { UserProvider, useUser, UserContext };
