import React from 'react';

interface DescriptionProps {
  description: string,
}

function Description(props: DescriptionProps) {
  const { description } = props;

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <h5>Description</h5>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12" id="breed-description">
          <p>{ description }</p>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Description;
