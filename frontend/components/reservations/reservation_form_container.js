import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createReservation } from "../../actions/reservation_actions";
import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import ReservationForm from "./reservation_form";

const mapStateToProps = (state, ownProps) => {
  debugger
  const clearErrors = () => {
    return state.errors['reservation'] = [];
  }
  
  return {
    currentUser: state.entities.users[state.session.currentUserId],
    venue: state.entities.venues[ownProps.match.params.venue_id],
    loggedIn: Boolean(state.session.currentUserId),
    reservationHash: ownProps.location.state.reservationHash,
    errors: state.errors.reservation,
    clearErrors: clearErrors()
  }
}

const mapDispatchToProps = dispatch => ({
  createReservation: reservation => dispatch(createReservation(reservation)),
  openModal: modal => dispatch(openModal(modal)),
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(ReservationForm)