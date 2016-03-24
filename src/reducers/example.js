import { REQUEST_EXAMPLE, RECEIVE_EXAMPLE, INVALIDATE_EXAMPLE } from '../actions/example';

export default function example(state = {
  isFetching: false,
  didInvalidate: true
}, action) {
  switch (action.type) {
    case INVALIDATE_EXAMPLE:
      return Object.assign({}, state, {
        didInvalidate: true
      })
      break;
    case REQUEST_EXAMPLE:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
      })
      break;
    case RECEIVE_EXAMPLE:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        lastUpdated: action.receiveAt
      })
      break;
    default:
      return state
  }
}
