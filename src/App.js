import React, { Component } from 'react';
import Main from './Components/Main';
import Header from './Components/Header';
import Filter from './Components/Filter';

/** Import Content/Resources **/
import data from '../Content/data/products.json';

/** Import Product Images **/
import product1 from './Content/assets/product1.jpg';
import product2 from './Content/assets/product2.jpg';
import product3 from './Content/assets/product3.jpg';
import product4 from './Content/assets/product4.jpg';
import product5 from './Content/assets/product5.jpg';
import product6 from '../Content/assets/product6.jpg';
import product7 from '../Content/assets/product7.jpg';
import product8 from '../Content/assets/product8.jpg';

/** CSS **/
import './CSS/App.css';
import './CSS/MainSection.css';

class App extends Component {

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
  }

  render() {
    return (
      <div className="App">

        /**  **/
        <Header />
        <Filter />
        <Main ScreenData={this.state} />
      </div>
    );
  }
}

export default App;
