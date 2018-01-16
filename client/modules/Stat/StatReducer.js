import { ADD_USER } from './StatActions';


const StatReducer = (state, action) => {
    switch (action.type) {
  
      case ADD_USER :
        return {
          user: action.user,
          notFoundPageVisible: true
        };

      default:
        return { 
          user: null, 
          notFoundPageVisible:false 
        };
    }
  };

export default StatReducer;