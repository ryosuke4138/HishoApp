import React from 'react';
import PropTypes from 'prop-types'
import TasksPage from './TasksPage';
import FlashMessage from './FlashMessage';
import 'antd/dist/antd.css';

export default function TodoApp({tasks, isLoading, error, fetchTasks, onCreateTask, onStatusChange, onDeleteTask}) {
  console.log();
  
  return (
    <div>
      {error && <FlashMessage message={error} />}
      <div>
        <TasksPage 
          tasks={tasks} 
          fetchTasks={fetchTasks}
          onCreateTask={onCreateTask}
          onStatusChange={onStatusChange}
          onDeleteTask={onDeleteTask}
          isLoading={isLoading} 
        />
      </div>
    </div>
  );
}