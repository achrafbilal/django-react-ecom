import logo from './logo.svg';
import './App.css';
import Routes from './Routes';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [auth, setAuth] = useState({ login: "", password: "" })
  const logged = () => auth.login === "admin"
  const loginHandler = (username, password) => {
    if (username === "admin" && password === "admin") {
      setAuth({
        login: username,
        password: password
      })
    }
  }
  return (
    <div className="App">

      <Routes auth={auth} onLogin={loginHandler} >
        <Header logged={logged} />
      </Routes>
    </div>
  );
}

export default App;
