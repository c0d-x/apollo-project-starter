/* eslint-disable class-methods-use-this */
import React from 'react';

import FavouriteCard from './card';

import loader from '../../images/loader.gif';
import { call } from '../../graphql/client';
import { getFavourites as getFavouritesQuery } from '../../graphql/queries';

interface FavouritesContainerState {
  favourites: Array<any>,
  isLoading: boolean,
}

class FavouritesContainer extends React.Component<any, FavouritesContainerState> {
  constructor(props: any) {
    super(props);

    this.state = {
      favourites: [],
      isLoading: false,
    };

    this.refresh = this.refresh.bind(this);
  }

  async componentDidMount() {
    await this.refresh();
  }

  async getFavourites() {
    return call({ query: getFavouritesQuery });
  }

  async refresh() {
    this.setState({ isLoading: true });

    const favourites = await this.getFavourites();

    this.setState({
      favourites,
      isLoading: false,
    });
  }

  renderCards() {
    const { favourites } = this.state;

    return !favourites || !favourites.length
      ? this.renderNoResults()
      : (
        <div className="card-columns" id="list-favourites">
          {
            favourites
              .map((item) => (
                <FavouriteCard
                  key={item.id}
                  refresh={this.refresh}
                  favourite={item}
                />
              ))
          }
        </div>
      );
  }

  renderNoResults() {
    return (
      <div id="msg-no-favourites" className="col-md-12">
        <div className="alert alert-info text-center">
          <h4 className="alert-heading">So sad</h4>
          <p className="mb-0">No favourite for now...</p>
          <p>You can go like them from the images tab !</p>
        </div>
      </div>
    );
  }

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return (
        <div className="d-flex justify-content-center mt-5">
          <img src={loader} alt="loader" />
        </div>
      );
    }

    return (
      <div id="myTabContent" className="tab-content mt-4">
        <div className="tab-pane fade show active" id="favourites">
          <div className="container">
            <div id="row-favourites" className="row">
              { this.renderCards() }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FavouritesContainer;
