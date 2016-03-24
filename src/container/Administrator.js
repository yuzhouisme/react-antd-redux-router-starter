import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Administrator from '../component/admin/Administrator';
import actions from '../actions';

function mapStateToProps(state) {
  return {
    example: state.example
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Administrator);
