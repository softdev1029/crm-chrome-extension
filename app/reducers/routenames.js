import * as ActionTypes from '../constants/RouteNames';

const initState = {
  route: window.location.pathname.indexOf('window.html') > -1 ? 'infograph' : 'default',
  isWindow: window.location.pathname.indexOf('window.html') > -1,
  formvalues: (() => {
    const search = location.search.substring(1);
    if (search === '') return {};
    const searchWord = search.replace(/&/g, '","').replace(/=/g, '":"');
    const params = JSON.parse(`{"${searchWord}"}`, (key, value) => (key === '' ? value : decodeURIComponent(value)));
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
      return { ...state, formvalues: action.payload };
    default:
      return initState;
  }
};
