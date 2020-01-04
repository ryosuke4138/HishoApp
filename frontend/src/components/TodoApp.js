import React from 'react';
import PropTypes from 'prop-types'
import TasksPage from './TasksPage';
import FlashMessage from './FlashMessage';
import 'antd/dist/antd.css';

export default function TodoApp({ createTask, editTask, deleteTask, fetchTasks }) {
  return (
    <div>
      {/* {this.props.error && <FlashMessage message={this.props.error} />} */}
      <div>
        <TasksPage />
      </div>
    </div>
  );
}