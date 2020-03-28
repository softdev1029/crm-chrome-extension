import * as types from '../constants/ActionTypes';
import { postData } from '../apis/apiList';

export function postPdfData(data) {
  return async (dispatch) => {
    const res = await postData(data);
    if (res.data) {
      dispatch({ type: 'SUCCESSPOSTPDF', response: res.data });
    } else {
      dispatch({ type: 'FAILPOSTPDF', error: res });
    }
  };
}

export function getPdfData(id) {
  return { type: types.DELETE_TODO, id };
}
