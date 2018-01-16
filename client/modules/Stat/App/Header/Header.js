import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

// Import Style
import styles from './Header.css';

import searchIcon from './search.png';


export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {displayName: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({displayName: event.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.state.displayName==''){
      return;
    }
    this.props.findUser(this.state.displayName);
    this.setState({displayName: ""});
  }
  searchIconStyle = {
      width: "100%",
      background: `#FFF url(${searchIcon}) no-repeat`,
      backgroundPosition : '98%'
  }
  render(){
    return (
      <div className={ styles.header }>
        <div className={ styles.content }>
            <form id="searchUserForm" onSubmit={ this.handleSubmit }>
                <input 
                  className={styles['search-box']} 
                  style={ this.searchIconStyle } 
                  value={ this.state.displayName } 
                  onChange={ this.handleChange }
                  type="textbox" 
                  placeholder="Look up user"
                />
            </form>
        </div>
      </div>
    );
  }

}

export default Header;