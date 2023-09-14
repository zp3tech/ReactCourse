import logo from './logo.svg';
import './App.css';

function Header() { // This is a component
  return (
    // This is jsx
    <header>
      <nav>
        <img src='./logo192.png' alt='Smaller React logo' />
        <h1>This is the Header</h1>
      </nav>
      <h2>Below the nav is a huge logo</h2>
      <img src={logo} alt='React logo'/>
    </header>
  )
}

function App() {
  return (
    <>
      {/* putting in Header component here */}
      <Header /> 

      <p>Hello, React</p>
    </>
  )
}

export default App;
