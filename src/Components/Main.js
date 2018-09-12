import React, { Component } from 'react';
import Item from './Item';
import data from '../Content/data/products.json';

/** Import Content **/
import product1 from '../Content/assets/product1.jpg';
import product2 from '../Content/assets/product2.jpg';
import product3 from '../Content/assets/product3.jpg';
import product4 from '../Content/assets/product4.jpg';
import product5 from '../Content/assets/product5.jpg';
import product6 from '../Content/assets/product6.jpg';
import product7 from '../Content/assets/product7.jpg';
import product8 from '../Content/assets/product8.jpg';

class Main extends Component {

componentWillMount() {
  this.state = {
    items: data.products,
    product_images: {
      product1: product1,
      product2: product2,
      product3: product3,
      product4: product4,
      product5: product5,
      product6: product6,
      product7: product7,
      product8: product8
    }
  };
  console.log(this.state);
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
