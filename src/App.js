import React, { Component } from 'react';
import ProductsContainer from './container/productContainer';
import CartContainer from './container/cartContainer';
import MessageContainer from './container/messageContainer';
import Footer from './component/Footer';
import Header from './component/Header';

class App extends Component {
  render() {
    return (
      <div>
        {/* Header */}
        <Header />
        <main id="mainContainer">
          <div className="container">
            {/* Product */}
            <ProductsContainer />
            
            {/* Message */}
            <MessageContainer />

            {/* Cart */}
            <CartContainer />
        
          </div>
        </main>
        {/* Footer */}
        <Footer />

       </div>
    );
  }
}
export default App;
