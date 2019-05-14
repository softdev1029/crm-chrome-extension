import * as ActionTypes from '../constants/RouteNames';

let initState = {
    route: window.location.pathname.indexOf("window.html") > -1 ? 'infograph' : 'default',
    isWindow: window.location.pathname.indexOf("window.html") > -1 ? true : false,
    formvalues: (function() {
      var search = location.search.substring(1);
      if(search == "") return {};
      var params = JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g,'":"') + '"}', function(key, value) { return key===""?value:decodeURIComponent(value) });
      return params;
    })()
};
  
  
  export default (state = initState, action) => {
    switch (action.type) {
      case ActionTypes.DEFAULT_VIEW:
        return initState;
      case ActionTypes.INFOGRAPH:
        return { route: 'infograph' };
      case ActionTypes.ADD_VALUES: 
        return {...state, formvalues: action.payload}
      default:
        return initState;
    }
  };