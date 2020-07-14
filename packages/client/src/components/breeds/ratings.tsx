import React from 'react';
import times from 'lodash/times';
import { generate } from 'shortid';

class Ratings extends React.Component<any, any> {
  renderData() {
    const { ratings } = this.props;

    if (!ratings) {
      return ('');
    }

    return Object
      .entries(ratings)
      .map(([skill, note]) => (
        <div key={generate()} className="row">
          <div className="col-md-6">
            <p>{ skill }</p>
          </div>
          <div className="col-md-6 text-warning">
            { times(Number(note), () => <i key={generate()} className="fa fa-star" />) }
          </div>
        </div>
      ));
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <h5>Ratings</h5>
          </div>
        </div>
        { this.renderData() }
        <hr />
      </div>
    );
  }
}

export default Ratings;
