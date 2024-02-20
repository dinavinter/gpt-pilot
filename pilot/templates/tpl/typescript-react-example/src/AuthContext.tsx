import React, { useEffect, useState } from 'react';

type Props = {
  children?: any;
};

type User = {
  isAuthenticated: boolean;
  name?: string;
  email?: string;
};

const AuthContext = React.createContext({});

export const AuthProvider: React.FC = ({ children }: Props) => {
  const [user, setUser] = useState<User>({ isAuthenticated: false });
  const [idToken, setIdToken] = useState(null);

  function login() {
    // @ts-ignore
    window.gigya.accounts.showScreenSet({ screenSet: 'Default-RegistrationLogin' });
  }

  function logout() {
    // @ts-ignore
    window.gigya.accounts.logout({
      callback: (e: any) => {
        if (e.errorCode === 0) setUser({ isAuthenticated: false });
      },
    });
  }

  function getJWT() {
    // @ts-ignore
    window.gigya.accounts.getJWT({
      callback: (e: any) => {
        if (e.errorCode === 0) setIdToken(e.id_token);
      },
    });
  }

  useEffect(() => {
    // @ts-ignore
    // noinspection JSUnusedGlobalSymbols
    window.gigya.socialize.addEventHandlers({
      onLogin: (e: any) => {
        // @ts-ignore
        window.gigya.accounts.getJWT({
          fields: 'firstName, lastName, email',
          callback: (arg: any) => {
            if (arg.errorCode === 0) {
              setUser({ isAuthenticated: true, name: `${e.user.nickname}` });
              setIdToken(arg.id_token);
            }
          },
        });
      },
    });
  }, []);

  useEffect(() => {
    // @ts-ignore
    window.gigya.accounts.getAccountInfo({
      callback: (e: any) => {
        if (e.errorCode === 0) {
          console.log(e);
          // @ts-ignore
          window.gigya.accounts.getJWT({
            fields: 'firstName, lastName, email',
            callback: (arg: any) => {
              if (arg.errorCode === 0) {
                console.log(arg);
                setUser({ isAuthenticated: true, name: `${e.profile.firstName} ${e.profile.lastName}` });
                setIdToken(arg.id_token);
              }
            },
          });
        } else {
          setUser({ isAuthenticated: false });
        }
      },
    });
  }, []);

  return <AuthContext.Provider value={{ user, login, logout, getJWT, idToken }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
