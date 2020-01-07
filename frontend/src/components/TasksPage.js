import React, { Component } from 'react';
import { Button } from 'antd';

import TaskList from './TaskList';
import { WrappedAddTaskForm } from './AddTaskForm';
import { TASK_STATUSES } from '../constants/tasks';

class TasksPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNewCardForm: false,
    };
    this.props.fetchTasks();
  }

  toggleForm = () => {
    this.setState({ showNewCardForm: !this.state.showNewCardForm });
  };

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
          <Button type="primary" onClick={this.toggleForm}>Add Task</Button>
        </div>
        {this.state.showNewCardForm && <WrappedAddTaskForm onCreateTask={this.props.onCreateTask} />}
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
