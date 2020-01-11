import { connect } from 'react-redux'
import TodoApp from '../components/TodoApp'
import { createTask, editTask, deleteTask, fetchTasks } from '../actions/TodoApp'
import { createCategory, editCategory, deleteCategory, fetchCategories } from '../actions/Category'

function mapStateToProps(state) {
  return {
    tasks: state.TodoApp.tasks,
    categories: state.Category.categories,
    isLoading: state.TodoApp.isLoading,
    error: state.TodoApp.error
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTasks() {
      dispatch(fetchTasks());
    },
    onCreateTask({title, description, deadline, category_id}) {
      console.log('onCreateTask')
      dispatch(createTask(title, description, deadline, category_id))
    },
    onStatusChange(id, status) {
      dispatch(editTask(id, { status }))
    },
    onStatusCompletedAtChange(id, status, completed_at) {
      dispatch(editTask(id, { status, completed_at }))
    },
    onDeleteTask(id) {
      dispatch(deleteTask(id))
    },
    fetchCategories() {
      dispatch(fetchCategories());
    },
    onCreateCategory({name}) {
      console.log('onCreateCategory')
      dispatch(createCategory(name))
    },
    onChangeCategoryName(id, name) {
      dispatch(editCategory(id, { name }))
    },
    onDeleteCategory(id) {
      dispatch(deleteCategory(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)