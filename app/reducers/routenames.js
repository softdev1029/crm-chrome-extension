import * as ActionTypes from '../constants/RouteNames';

let initState = {
    route: 'default'
};
  
  
  export default (state = initState, action) => {
    switch (action.type) {
      case ActionTypes.DEFAULT_VIEW:
        return initState;
      case ActionTypes.INFOGRAPH:
        return { route: 'infograph' };
      default:
        return initState;
    }
  };