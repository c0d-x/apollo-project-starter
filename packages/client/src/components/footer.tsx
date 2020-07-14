import React from 'react';

function Footer() {
  return (
    <div>
      <div className="py-5" />
      <footer id="sticky-footer" className="py-3 navbar-dark bg-primary rounded-top text-white-50">
        <div className="container text-center">
          <span>
            Copyright &copy;&nbsp;
            <a
              className="text-white"
              href="https://github.com/c0d-x"
              rel="noopener noreferrer"
              target="_blank"
            >
              cOdx
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
