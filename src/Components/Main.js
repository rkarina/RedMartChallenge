import React, { Component } from 'react';
import Item from './Item';

class Main extends Component {

  componentWillMount() {
    this.state = this.props.ScreenData;
    console.log(this.props.ScreenData);
  }

  render() {
    let products = this.state.product_images;

    return (
      <div className="MainSection">
        {this.state.items.map(function(x, index) {
          return (<Item key={index}
                    image={products["product" + (index + 1)]}
                    data={x} />);
        })}
      </div>
    );

  }
}

export default Main;
