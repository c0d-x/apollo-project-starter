import React from 'react';

interface ThumbnailProps {
  url: string,
}

function Thumbnail(props: ThumbnailProps) {
  const { url } = props;

  return (
    <div className="col-md-6 py-4">
      <img
        className="card-img-top rounded-0 img-fluid img-thumbnail"
        id="breed-image"
        src={url || ''}
        alt="missing"
      />
    </div>
  );
}

export default Thumbnail;
