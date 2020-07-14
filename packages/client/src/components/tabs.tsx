import React from 'react';

interface PropsTypes {
  children: any
}

interface StateTypes {
  activeTabIndex: number,
}

class Tabs extends React.Component<PropsTypes, StateTypes> {
  constructor(props: PropsTypes, context: any) {
    super(props, context);

    this.state = {
      activeTabIndex: 0,
    };

    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(tabIndex: number) {
    const { activeTabIndex } = this.state;

    this.setState({
      activeTabIndex: tabIndex === activeTabIndex
        ? 0
        : tabIndex,
    });
  }

  renderChildrenWithTabsApiAsProps() {
    const { children } = this.props;
    const { activeTabIndex } = this.state;

    return React.Children
      .map(children, (child, index) => React.cloneElement(child, {
        onClick: this.handleTabClick,
        tabIndex: index,
        isActive: index === activeTabIndex,
      }));
  }

  renderActiveTabContent() {
    const { children } = this.props;
    const { activeTabIndex } = this.state;

    return children[activeTabIndex]
      ? children[activeTabIndex].props.children
      : '';
  }

  render() {
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="nav nav-tabs" id="menu-tabs">
                {this.renderChildrenWithTabsApiAsProps()}
              </ul>
              <div className="tabs-active-content">
                {this.renderActiveTabContent()}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Tabs;
