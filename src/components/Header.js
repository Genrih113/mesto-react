import mestoLogo from '../images/mesto_logo.svg';

function Header() {
  return (
    <header className="header">
      <div className="logo header__logo">
        <img src={mestoLogo} />
      </div>
    </header>
  );
}

export default Header;
