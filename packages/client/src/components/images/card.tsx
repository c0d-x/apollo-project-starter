import React from 'react';

import { call } from '../../graphql/client';
import { createFavourite as createFavouriteMutation } from '../../graphql/mutations';

type ImageCardState = {
  isFavourite: boolean,
  isLoading: boolean,
};

type ImageCardProps = {
  image: any,
};

class ImageCard extends React.Component<ImageCardProps, ImageCardState> {
  constructor(props: ImageCardProps) {
    super(props);

    this.state = {
      isFavourite: !!props.image.favouriteId,
      isLoading: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick(event: any) {
    event.preventDefault();

    // Start button loading animation 
    this.setState({ ...this.state, isLoading: true });

    // prevent from multiple clicks
    event.target.setAttribute('disabled', true);

    const { image } = this.props;

    await call({
      query: createFavouriteMutation,
      variables: {
        input: {
          imageId: image.id,
        },
      },
    })

    this.setState({ isFavourite: true, isLoading: false });
  }

  renderCard() {
    const { image } = this.props;
    const { isLoading } = this.state;

    return (
      <div className="card card-not-fav">
        <img
          className="card-img-top rounded-0 img-fluid image"
          alt="missing"
          src={image.url}
        />
        <div className="middle">
          <button
            id={`favourite-btn-${image.id}`}
            className={'favourite-btn' + (isLoading ? ' loading' : '')}
            type="button"
            onClick={this.handleClick}
          >
            Be my favourite !
          </button>
        </div>
      </div>
    );
  }

  renderFavouriteCard() {
    const { image } = this.props;

    return (
      <div className="card">
        <img
          className="card-img-top rounded-0 img-fluid image"
          alt="missing"
          src={image.url}
        />
        <div className="bottomright">
          <i className="fa fa-heart heart-full animated" aria-hidden="true" />
        </div>
      </div>
    );
  }

  render() {
    const { isFavourite } = this.state;
    const { image } = this.props;

    return (
      <div id={`image${image.id}`}>
        {
          !isFavourite
            ? this.renderCard()
            : this.renderFavouriteCard()
        }
      </div>
    );
  }
}

export default ImageCard;
