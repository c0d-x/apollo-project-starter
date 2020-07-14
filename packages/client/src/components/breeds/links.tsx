import React from 'react';

interface LinksProps {
  link: string,
}

function Links(props: LinksProps) {
  const { link } = props;

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <h5>External links</h5>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6" id="breed-link">
          <p>
            <a
              href={link}
              rel="noopener noreferrer"
              target="_blank"
            >
              Wikipedia
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Links;
