import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import TasksPage from './TasksPage';
import FlashMessage from './FlashMessage';
// import classes from '*.module.css';

const classes = makeStyles({
  root: {
    display: 'flex',
  }
})

export default function TodoApp({
  tasks, 
  categories,
  isLoading, 
  error, 
  fetchTasks, 
  onCreateTask, 
  onStatusChange, 
  onStatusCompletedAtChange, 
  onDeleteTask,
  fetchCategories,
  onCreateCategory,
  onDeleteCategory,
}) {
  return (
    <div className={classes.root}>
      {error && <FlashMessage message={error} />}
      <div>
        <TasksPage 
          key={tasks} 
          tasks={tasks} 
          categories={categories} 
          fetchTasks={fetchTasks}
          onCreateTask={onCreateTask}
          onStatusChange={onStatusChange}
          onStatusCompletedAtChange={onStatusCompletedAtChange}
          onDeleteTask={onDeleteTask}
          fetchCategories={fetchCategories}
          onCreateCategory={onCreateCategory}
          onDeleteCategory={onDeleteCategory}
          isLoading={isLoading} 
        />
      </div>
    </div>
  )
}