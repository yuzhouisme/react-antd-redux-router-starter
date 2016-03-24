import fetch from 'isomorphic-fetch';
import { API } from '../constants/globals';

export const REQUEST_EXAMPLE = 'REQUEST_EXAMPLE';
export const RECEIVE_EXAMPLE = 'RECEIVE_EXAMPLE';
export const INVALIDATE_EXAMPLE = 'INVALIDATE_EXAMPLE';

export function invalidateExample() {
  return {
    type: INVALIDATE_EXAMPLE,
  };
}

function requestExample() {
  return {
    type: REQUEST_EXAMPLE,
  };
}

function receiveExample(json) {
  return {
    type: RECEIVE_EXAMPLE,
    receiveAt: Date.now(),
  };
}

function fetchData(data) {
  return dispatch => {
    dispatch(requestExample());
    return fetch(API.EXAMPLE_URL)
    .then((req) => req.json())
    .then((json) => {
      dispatch(receiveExample(json));
    });
  };
}

function shouldFetchData(state) {
  const { example } = state;
  if (!example) {
    return true;
  } else if (example.isFetching) {
    return false;
  }
  return example.didInvalidate;
}

export function fetchExampleIfNeeded(data) {
  return (dispatch, getState) => {
    if (shouldFetchData(getState())) {
      return dispatch(fetchData(data));
    }
  };
}
