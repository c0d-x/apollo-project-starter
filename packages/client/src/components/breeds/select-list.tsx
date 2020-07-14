import React from 'react';

interface SelectListProps {
  handleChange: any,
  breeds: Array<any>,
  selected: string,
}

class SelectList extends React.Component<SelectListProps, any> {
  renderOptions() {
    const { breeds } = this.props;

    return breeds.map(
      (breed) => (
        <option
          key={breed.id}
          value={breed.id}
        >
          {breed.name}
        </option>
      ),
    );
  }

  render() {
    const { handleChange, selected } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <select
                onChange={handleChange}
                className="custom-select"
                id="select-breed"
                value={selected}
              >
                { this.renderOptions() }
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectList;
