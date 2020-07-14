/* eslint-disable class-methods-use-this */
import React from 'react';

import SelectList from './select-list';
import Thumbnail from './thumbnail';
import Description from './description';
import Ratings from './ratings';
import Links from './links';

import loader from '../../images/loader.gif';
import { call } from '../../graphql/client';
import { getBreeds as getBreedsQuery, getBreedImages as getBreedImagesQuery } from '../../graphql/queries';

interface BreedsContainerState {
  breeds: Array<any>,
  breed: any,
  isLoading: boolean,
}

class BreedsContainer extends React.Component<any, BreedsContainerState> {
  constructor(props: any) {
    super(props);

    this.state = {
      breeds: [],
      breed: {},
      isLoading: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    this.setState({ isLoading: true });

    const breeds = await call({ query: getBreedsQuery });
    const breed = await this.getBreed(breeds[0].id);

    this.setState({
      breeds,
      breed,
      isLoading: false,
    });
  }

  async getBreed(id: string, limit: number = 1) {
    const response = await call({
      query: getBreedImagesQuery,
      variables: {
        breedId: id,
        limit,
      },
    });

    // reformat
    return {
      url: response[0].url,
      ...response[0].breeds[0],
    };
  }

  async handleChange(event: any) {
    this.setState({ isLoading: true });
    const breed = await this.getBreed(event.target.value);
    this.setState({ breed, isLoading: false });
  }

  render() {
    const { isLoading, breed, breeds } = this.state;

    if (isLoading) {
      return (
        <div className="d-flex justify-content-center mt-5">
          <img src={loader} alt="loader" />
        </div>
      );
    }

    return (
      <div id="myTabContent" className="tab-content mt-4">
        <div className="tab-pane fade show active" id="breeds">
          <SelectList
            selected={breed.id}
            handleChange={this.handleChange}
            breeds={breeds}
          />
          <div className="container">
            <div className="row">
              <Thumbnail url={breed.url} />
              <div className="col-md-6 py-4">
                <Description description={breed.description} />
                <Ratings ratings={breed.ratings} />
                <Links link={breed.externalLink} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BreedsContainer;
