// function Header() {
//   return (
//     <header className="header">
//       <img
//         src="/images/logo.png"
//         alt="NITS Logo"
//         className="logo"
//       />
//     </header>
//   );
// }

// export default Header;




import logo from "/icons/icons.svg";

function Header() {
  return (
    <header className="header">

      <div className="banner">
        <img src="/images/banner.jpg" alt="NITS Banner" />
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