import logo from './logo.svg';
import './App.css';

function Header() { // This is a component
  return (
    <header>
      <nav>
        <img src={logo} alt='React logo'/>
        <img src='./logo192.png' alt='Smaller React logo' />
        <h1>This is the Header</h1>
      </nav>
    </header>
  )
}

function App() {
  return (
    <>
      <Header />
      <p>Hello, React</p>
    </>
  )
}

export default App;
