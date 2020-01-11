import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

import TaskList from './TaskList';
import { AddTaskReduxForm } from './AddTaskForm'
import { AddCategoryReduxForm } from './AddCategoryForm'
import { TASK_STATUSES } from '../constants/tasks'

class TasksPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showNewTaskCardForm: false,
      showNewCategoryCardForm: false,
    }
    this.props.fetchCategories()
    this.props.fetchTasks()
  }

  toggleTaskForm = () => {
    this.setState({ showNewTaskCardForm: !this.state.showNewTaskCardForm });
  }

  toggleCategoryForm = () => {
    this.setState({ showNewCategoryCardForm: !this.state.showNewCategoryCardForm });
  }

  render() {
    if (this.props.isLoading) {
      return (
        <div>
          Loading...
        </div>
      );
    }
    return (
      <div>
        <div>
          <Button variant="contained" color="primary" onClick={this.toggleCategoryForm}>
            New Category
          </Button>
        </div>
        {this.state.showNewCategoryCardForm && <AddCategoryReduxForm categories={this.props.categories} onCreateCategory={this.props.onCreateCategory}/>}
        <div>
          <Button variant="contained" color="primary" onClick={this.toggleTaskForm}>
            New Task
          </Button>
        </div>
        {this.state.showNewTaskCardForm && <AddTaskReduxForm categories={this.props.categories} onCreateTask={this.props.onCreateTask}/>}
        <div>
          {
            TASK_STATUSES.map(status => {
              const statusTasks = this.props.tasks.filter(
                task => task.status === status
              );
              return (
                <div style={{ margin: "25px 20px 25px 20px" }}>
                  <h2>{status}</h2>
                  <TaskList
                    key={status}
                    status={status}
                    tasks={statusTasks}
                    onStatusChange={this.props.onStatusChange}
                    onDeleteTask={this.props.onDeleteTask}
                  />
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default TasksPage;
