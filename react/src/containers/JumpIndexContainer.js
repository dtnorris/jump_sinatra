import { connect } from 'react-redux';
import JumpIndex from '../components/JumpIndex';
import { addJump } from '../jumpLogApp';

const mapStateToProps = (state) => {
  return {
    jumps: state.jumpLogs.jumps
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    newJumpClick: () => { dispatch(addJump()) }
  }
}

const JumpIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(JumpIndex)

export default JumpIndexContainer;
