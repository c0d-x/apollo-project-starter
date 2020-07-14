import React from 'react';

class Tab extends React.Component<any, any> {
  constructor(props: any, context: any) {
    super(props, context);
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(event: any) {
    event.preventDefault();

    const { onClick, tabIndex } = this.props;

    onClick(tabIndex);
  }

  render() {
    const { isActive, href, label } = this.props;

    return (
      <li className="nav-item">
        <a
          className={`nav-link ${isActive ? 'active' : ''}`}
          href={href}
          onClick={this.handleTabClick}
        >
          {label}
        </a>
      </li>
    );
  }
}

export default Tab;
