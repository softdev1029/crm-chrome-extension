import * as types from '../constants/RouteNames';

export function gotoInfoGraph(payload) {
  return { type: types.INFOGRAPH, payload };
}

export function gotoHome(payload) {
  return { type: types.DEFAULT_VIEW, payload };
}
