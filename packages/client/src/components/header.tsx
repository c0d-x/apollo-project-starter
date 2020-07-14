import React from 'react';
import { toast } from 'react-toastify';

import logo from '../images/cat-icon.png';

class Header extends React.Component {
  showToast = () => {
    toast.warning('🦄 This feature will come soon !', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
    });
  };

  render() {
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="index.html">
                  <img src={logo} alt="logo" />
                  &nbsp;GraphQL Cats
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarColor03"
                  aria-controls="navbarColor03"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarColor03">
                  <ul className="navbar-nav ml-auto mt-10">
                    <li className="nav-item">
                      <a
                        className="nav-link login-button"
                        onClick={this.showToast}
                        href="/#"
                      >
                        Login
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
