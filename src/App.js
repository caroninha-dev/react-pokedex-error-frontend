import logo from './logo.svg';
import './App.css';

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

function getMessage(code) {
  switch (code) {
    case '404':
      return {
        message: 'Página não encontrada',
        redirectUrl: 'https://www.google.com.br/'
      };

    case '500':
      return {
        message: 'Erro interno',
        redirectUrl: 'https://www.google.com.br/'
      };

    default:
      return {
        message: 'Erro desconhecido',
        redirectUrl: 'https://www.google.com.br/'
      };
  }
}

function App() {
  const { message, redirectUrl } = getMessage(params.code);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          {params.code}
        </h1>
        <p>
        {message}
        </p>
        <img src={logo} className="App-logo" alt="logo" />

        <a href={redirectUrl}>Voltar</a>
      </header>
    </div>
  );
}

export default App;
