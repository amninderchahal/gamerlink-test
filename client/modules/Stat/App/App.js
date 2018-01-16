import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Import Style
import styles from './App.css';

// Import Components
import Helmet from 'react-helmet';
import Header from './Header/Header';

import { findUser } from '../statActions';
import { bindActionCreators } from 'redux';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({isMounted: true});
  }

  findUserByName = (displayName)=>{
    this.props.findUser(displayName);
  }

  render() {
    return (
      <div>
        <div>
          <Helmet
            title="GamerLink"
            titleTemplate="%s - Game Stats"
            meta={[
              { charset: 'utf-8' },
              {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge',
              },
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              },
            ]}
          />
          <Header findUser={ this.findUserByName }/>
          <div className={styles.container}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({findUser : findUser}, dispatch);
}
// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);