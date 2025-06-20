import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid d-flex justify-content-between align-items-center px-4">

        {/* LEFT SIDE: TextUtils | Home | About */}
        <div className="d-flex align-items-center">
          {/* Brand */}
          <Link className="navbar-brand fw-bold me-3" to="/">
            {props.title}
          </Link>

          {/* Home and About Links */}
          <ul className="navbar-nav flex-row">
            <li className="nav-item me-3">
              <Link className="nav-link fw-bold" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold mx-2" to="/about">About</Link>
            </li>
          </ul>
        </div>

        {/* RIGHT SIDE: Theme Color Buttons + Dark/Light Toggle */}
        <div className={`d-flex align-items-center text-${props.mode === 'light' ? 'dark' : 'light'}`}>
          {/* Theme Color Buttons */}
          <div className="d-flex me-3">
            <div className="bg-primary rounded mx-1" onClick={() => props.toggleMode('primary')} style={{ height: '25px', width: '25px', cursor: 'pointer' }}></div>
            <div className="bg-danger rounded mx-1" onClick={() => props.toggleMode('danger')} style={{ height: '25px', width: '25px', cursor: 'pointer' }}></div>
            <div className="bg-success rounded mx-1" onClick={() => props.toggleMode('success')} style={{ height: '25px', width: '25px', cursor: 'pointer' }}></div>
            <div className="bg-warning rounded mx-1" onClick={() => props.toggleMode('warning')} style={{ height: '25px', width: '25px', cursor: 'pointer' }}></div>
          </div>

          {/* Mode Toggle Switch */}
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={() => props.toggleMode(null)}
            />
            <label className="form-check-label fw-bold ms-1" htmlFor="flexSwitchCheckDefault">
              {props.mode === 'light' ? 'Dark' : 'Light'} Mode
            </label>
          </div>
        </div>

      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
};

export default Navbar;
