import {
  RECEIVE_RESERVATION,
  RECEIVE_RESERVATIONS,
  REMOVE_RESERVATION,
} from '../actions/reservation_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const reservationsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_RESERVATIONS:
      return Object.assign({}, action.reservations);
    case RECEIVE_RESERVATION:
      return Object.assign({}, state, { [action.reservation.id]: action.reservation });
    case REMOVE_RESERVATION:
      delete newState[action.resId];
      return newState;
    case LOGOUT_CURRENT_USER:
      return Object.assign({});
    default:
      return state;
  }
}

export default reservationsReducer;