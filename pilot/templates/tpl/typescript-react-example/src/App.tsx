import React, { useContext } from 'react';
import styled from 'styled-components';
import AuthContext from './AuthContext';

const Container = styled.div`
  font-family: 'Helvetica Neue', sans-serif;
  padding: 16px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  padding: 12px;
  font-size: 18px;
  background-color: darkcyan;
  border: none;
  border-radius: 8px;
  color: white;
  outline: none;
  cursor: pointer;
  &:active {
    background-color: cadetblue;
  }
`;

const Unauthenticated = styled.div`
  padding: 16px;
  background-color: darkred;
  color: white;
  margin-bottom: 16px;
`;

const Authenticated = styled(Unauthenticated)`
  background-color: cadetblue;
`;

const App: React.FC = () => {
  // @ts-ignore
  const { user, login, logout, getJWT, idToken } = useContext(AuthContext);
  return (
    <Container>
      <Header>
        <h1>Gigya Auth Test</h1>
        {!user.isAuthenticated ? (
          <Button type="button" onClick={login}>
            Log me In, Scotty!
          </Button>
        ) : (
          <Button type="button" onClick={logout}>
            Please, log me out from here!
          </Button>
        )}
      </Header>
      {!user.isAuthenticated && <Unauthenticated>Show this text when user is NOT authenticated (hide it after successful login).</Unauthenticated>}
      {user.isAuthenticated && (
        <Authenticated>
          <p>Show this text only when user IS authenticated.</p>
          <p>{user?.name}</p>
          <button type="button" onClick={getJWT}>
            Get JWT
          </button>
          {idToken && <blockquote>{idToken}</blockquote>}
        </Authenticated>
      )}
    </Container>
  );
};

export default App;
