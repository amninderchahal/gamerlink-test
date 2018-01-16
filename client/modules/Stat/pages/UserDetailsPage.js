import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Components
import UserDetails from '../components/UserDetails';
import UserNotFound from '../components/UserNotFound';  


class UserDetailsPage extends Component {
  checkIfUserFound(user){
      if(user == null){
        return (<UserNotFound visible={this.props.notFoundPageVisible} />)
      }
      else{
        return (<UserDetails  user={this.props.user} />)
      }
  }
  render() {
    return (
      <div>
        {this.checkIfUserFound(this.props.user)}
      </div>
    );
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    user: state.stats.user,
    notFoundPageVisible : state.stats.notFoundPageVisible
  };
}

export default connect(mapStateToProps)(UserDetailsPage);
