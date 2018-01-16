import React, { PropTypes, Component } from 'react';

import styles from './css/components.css';

export class UserNotFound extends Component {
  render(){
    return (
      <div 
        className={styles["user-not-found-content"]}
        style={{ display : this.props.visible ? 'block' : 'none' }} >
        User Not Found.
      </div>
    );
  }
}

export default UserNotFound;
