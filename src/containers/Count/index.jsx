import CountUI from '../../components/Count'
import { connect } from 'react-redux'
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from '../../redux/count_action'

export default connect(
  (state) => ({ count: state }),
  (dispatch) => ({
    jia: (data) => dispatch(createIncrementAction(data)),
    jian: (data) => dispatch(createDecrementAction(data)),
    jiaAsync: (data, time) => dispatch(createIncrementAsyncAction(data, time)),
  })
)(CountUI)
