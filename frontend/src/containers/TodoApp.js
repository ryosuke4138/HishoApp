import { connect } from 'react-redux';
import TodoApp from '../components/TodoApp';
import { inputTask, addTask } from '../actions/tasks';

function mapStateToProps(state) {
  return {
    task: state.TodoApp.task,
    tasks: state.TodoApp.tasks
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTask(task) {
      dispatch(addTask(task));
    },
    inputTask(task) {
      dispatch(inputTask(task))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);