import ReverseApi from '../../services/serviceReverseApi';
import { REVERSE_STRING } from '../actionsCreators/index';

export function getReverseString(text) {
  const url = 'http://localhost:3001/iecho?text=';
  return async function (dispatch) {
    ReverseApi(url, text)
      .then(data => dispatch({
        type: REVERSE_STRING,
        payload: data,
      }))
  }
}