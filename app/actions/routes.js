import * as types from '../constants/RouteNames';

export function gotoInfoGraph(payload) {
  chrome.windows.create({
    url: chrome.runtime.getURL("window.html?popup=true&val1="+payload.value1+"&val2="+payload.value2),
    type: "popup"
  });
  return { type: types.DEFAULT_VIEW, payload };
}

export function addValues(payload) {
  return { type: types.ADD_VALUES, payload };
}

export function gotoHome(payload) {
  return { type: types.DEFAULT_VIEW, payload };
}
