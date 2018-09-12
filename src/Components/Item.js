import React, { Component } from 'react';

class Item extends Component {

  componentWillMount() {
    this.state = {
      prefix: "./Content/assets/",
      name: this.props.data.name,
      price: this.props.data.price,
      measurement: this.props.data.measurement,
      image: this.props.image
    }
    console.log(this.props);
  }

  render() {
    return (
      <div className="ItemDetail">
        <div className="ItemImage">
          <img src={this.state.image} />
        </div>
        <div className="ItemHeading">
          <div><label>{this.state.name}</label></div>
          <div><label>{this.state.measurement}</label></div>
        </div>
        <div className="ItemPrice">
          <label>${this.state.price}</label>
        </div>
        <div className="ItemButton">
          <div>Add To Cart</div>
        </div>
      </div>);
  }
}

export default Item;
