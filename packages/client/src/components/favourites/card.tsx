import React from 'react';

import { call } from '../../graphql/client';
import { removeFavourite as removeFavouriteMutation } from '../../graphql/mutations';

type FavouriteCardProps = {
  favourite: any,
  refresh: Function,
};

class FavouriteCard extends React.Component<FavouriteCardProps, any> {
  constructor(props: FavouriteCardProps) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick(event: any) {
    event.preventDefault();
    // prevent from multiple clicks
    event.target.setAttribute('disabled', true);

    const { favourite, refresh } = this.props;

    await call({
      query: removeFavouriteMutation,
      variables: {
        input: {
          id: favourite.id,
        },
      },
    });

    await refresh();
  }

  render() {
    const { favourite } = this.props;

    return (
      <div className="card card-fav">
        <img
          className="card-img-top rounded-0 img-fluid image"
          alt="missing"
          src={favourite.image.url}
        />
        <div className="middle">
          <button
            id={`unfavourite-btn-${favourite.id}`}
            className="unfavourite-btn"
            type="button"
            onClick={this.handleClick}
          >
            Let him free !
          </button>
        </div>
      </div>
    );
  }
}

export default FavouriteCard;
