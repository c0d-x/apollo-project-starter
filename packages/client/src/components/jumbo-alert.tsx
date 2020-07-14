import React from 'react';

function JumboAlert() {
  return (
    <section>
      <div className="container py-3">
        <div className="row">
          <div className="col-md-12">
            <div id="jumbo-alert-intro" className="alert alert-dismissible alert-primary">
              <button type="button" className="close" data-dismiss="alert">&times;</button>
              <h1 className="alert-heading display-4">Welcome!</h1>
              <p className="lead">
                This is a simple demo of a GraphQL client that
                gathers pictures and informations about cats.
                <br />
                The&nbsp;
                <a
                  href="https://github.com/c0d-x/apollo-project-starter"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  backend server
                </a>
                &nbsp;is based on Apollo GraphQL and used as a proxy to&nbsp;
                <a
                  href="https://docs.thecatapi.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  TheCatAPI.
                </a>
                <br />
                Enjoy!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JumboAlert;
