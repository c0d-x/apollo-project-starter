/* eslint-disable class-methods-use-this */
import React from 'react';

import ShuffleButton from './shuffle-button';
import ImageCard from './card';

import loader from '../../images/loader.gif';
import { call } from '../../graphql/client';
import { getImages as getImagesQuery } from '../../graphql/queries';

const LIMIT = 9;

interface ImagesContainerState {
  currentPage: number,
  images: Array<any>,
  isLoading: boolean,
}

class ImagesContainer extends React.Component<any, ImagesContainerState> {
  constructor(props: any) {
    super(props);

    this.state = {
      currentPage: 0,
      images: [],
      isLoading: false,
    };

    this.handleShuffle = this.handleShuffle.bind(this);
    this.loadPage = this.loadPage.bind(this);
  }

  async componentDidMount() {
    await this.loadPage();
  }

  async getImages(currentPage: number) {
    return call({
      query: getImagesQuery,
      variables: {
        limit: LIMIT,
        page: currentPage,
      },
    });
  }

  async loadPage(page:number = 0) {
    this.setState({ isLoading: true });

    const images = await this.getImages(page);

    this.setState({
      currentPage: page,
      images,
      isLoading: false,
    });
  }

  async handleShuffle() {
    const { currentPage } = this.state;

    const nextPage = currentPage + 1;
    this.loadPage(nextPage);
  }

  renderCards() {
    const { images } = this.state;

    return !images || !images.length
      ? this.renderNoResults()
      : (
        <div className="card-columns" id="list-images">
          {
            images
              .map((item) => <ImageCard key={item.id} image={item} />)
          }
        </div>
      );
  }

  renderNoResults() {
    return (
      <div id="msg-no-images" className="col-md-12">
        <div className="alert alert-info text-center">
          <h4 className="alert-heading">Whaou</h4>
          <p className="mb-0">Looks like you&apos;ve seen it all !</p>
          <p className="mt-1">
            Don&apos;t worry you can still&nbsp;
            <a
              id="link-load-first"
              href="/#"
              onClick={() => this.loadPage()}
            >
              click here
            </a>
            &nbsp;to view it again ;)
          </p>
        </div>
      </div>
    );
  }

  render() {
    const { isLoading, images } = this.state;

    if (isLoading) {
      return (
        <div className="d-flex justify-content-center mt-5">
          <img src={loader} alt="loader" />
        </div>
      );
    }

    return (
      <div id="myTabContent" className="tab-content mt-4">
        <div className="tab-pane fade show active" id="images">
          <div className="container">
            <div id="row-images" className="row">
              { this.renderCards() }
            </div>
          </div>
          <div id="paginate-images" className="text-right">
            <ShuffleButton
              id="btn-load-more"
              name="button-shuffle"
              label="Shuffle more !"
              imagesCount={images.length}
              handleShuffle={this.handleShuffle}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ImagesContainer;
