import Header from '../../components/Header';
import './styles.css';

function Login() {
  return (
    <div className='container-total'>
      <Header />
      <div className='container'>
        <h1>Seja Bem vindo(a)!</h1>
        <div className='container-form'>
          <form className='content-form'>
            <div className='title'>
              <h2>Faça o Login</h2>
            </div>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              name='username'
            />
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
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
