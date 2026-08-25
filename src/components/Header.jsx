import banner from "../assets/images/banner.jpg";
import logo from "../assets/images/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="banner">
        <img src={banner} alt="NITS Banner" />
      </div>

      <div className="logo-wrapper">
        <img
          src={logo}
          alt="NITS Logo"
          className="logo"
        />
      </div>
    </header>
  );
}

export default Header;