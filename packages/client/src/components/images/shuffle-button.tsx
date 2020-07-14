import React from 'react';

interface ShuffleButtonProps {
  id: string,
  name: string,
  label: string,
  imagesCount: number,
  handleShuffle: Function
}

class ShuffleButton extends React.Component<ShuffleButtonProps> {
  render() {
    const {
      imagesCount,
      id,
      name,
      label,
      handleShuffle,
    } = this.props;

    if (!imagesCount) {
      return ('');
    }

    return (
      <button
        type="button"
        id={id}
        name={name}
        className="btn btn-info"
        onClick={() => handleShuffle()}
      >
        {label}
      </button>
    );
  }
}

export default ShuffleButton;
