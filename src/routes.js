import React from 'react';

/* Common Components */
import Header from './common/header';
import Footer from './common/footer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <div id='body'>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}
