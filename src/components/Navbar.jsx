import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="logo">
          PartnerMatch
        </div>

        <nav className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/matches">Matches</NavLink>
          <NavLink to="/saved">Saved</NavLink>
          <NavLink to="/create">Create</NavLink>
          <NavLink to="/my-profile">My Profile</NavLink>
        </nav>
      </div>
    </header>
  );
}