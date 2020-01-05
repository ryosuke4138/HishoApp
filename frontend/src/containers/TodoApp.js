import { connect } from 'react-redux';
import TodoApp from '../components/TodoApp';
import { createTask, editTask, deleteTask, fetchTasks } from '../actions/TodoApp';

function mapStateToProps(state) {
  return {
    tasks: state.TodoApp.tasks,
    isLoading: state.TodoApp.isLoading,
    error: state.TodoApp.error
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTasks() {
      dispatch(fetchTasks());
    },
    onCreateTask({title, description}) {
      dispatch(createTask(title, description))
    },
    onStatusChange(id, status) {
      dispatch(editTask(id, { status }))
    },
    onDeleteTask(id) {
      dispatch(deleteTask(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);