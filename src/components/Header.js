import mestoLogo from '../images/mesto_logo.svg';

function Header() {
  return (
    <header className="header">
      <div className="logo header__logo">
        <img className="logo__img" src={mestoLogo} alt="Проект Место"/>
      </div>
    </header>
  );
}

export default Header;
