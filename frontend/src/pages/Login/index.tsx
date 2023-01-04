import { useState } from 'react';
import Header from '../../components/Header';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { notifyError } from '../../utils/notifications';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e: any) {
    e.preventDefault();

    if (!username || !password) {
      return notifyError('Todos os campos são obrigatórios.');
    }

    if (username !== "desafiosharenergy" || password !== "sh@r3n3rgy") {
      return notifyError('Username e/ou Password inválidos.');
    }

    navigate('/home');

  }

  return (
    <div className='container-total'>
      <Header />
      <div className='container'>
        <h1>Seja Bem vindo(a)!</h1>
        <div className='container-form'>
          <form
           className='content-form'
           onSubmit={handleSubmit}
           >
            <div className='title'>
              <h2>Faça o Login</h2>
            </div>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              name='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className='btn'>
              <button>ENTRAR</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
