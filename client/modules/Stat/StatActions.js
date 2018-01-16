import callApi from '../../util/apiCaller';


// Export Constants
export const ADD_USER = "ADD_USER";

export function getUser(user) {
    return {
      type: ADD_USER,
      user
    };
}
  export function findUser(displayName) {
    return (dispatch) => {
      return callApi(`user/${displayName}`).then(res => {
        dispatch(getUser(res.user));
      })
    }
}