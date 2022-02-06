import logo from '../assets/logo.svg';
import '../styles/header.css';

const Header = () => {
  return (
    <>
      <header className='header'>
        <div className='header-title-container'>
          <img src={logo} className='header-logo' alt='logo' />
          <h1>React Basics</h1>
        </div>
        <a
          className='header-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </>
  );
}
 
export default Header;