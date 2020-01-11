import * as api from '../api/TodoApp';

function fetchTasksSucceeded(tasks) {
  return {
    type: 'FETCH_TASKS_SUCCEEDED',
    payload: {
      tasks,
    },
  }
}

function fetchTasksFailed(error) {
  return {
    type: 'FETCH_TASKS_FAILED',
    payload: {
      error,
    },
  }
}

function fetchTasksStarted() {
  return {
    type: 'FETCH_TASKS_STARTED',
  }
}

export function fetchTasks() {
  return dispatch => {
    dispatch(fetchTasksStarted());

    api
      .fetchTasks()
      .then(resp => {
        dispatch(fetchTasksSucceeded(resp.data));
      })
      .catch(err => {
        dispatch(fetchTasksFailed(err.message));
      })
  }
}

function createTaskSucceeded(task) {
  return {
    type: 'CREATE_TASK_SUCCEEDED',
    payload: {
      task,
    },
  };
}

export function createTask(title, description, deadline, category_id, status = 'Unstarted') {
  console.log('action!!!')
  console.log(title, description, deadline, category_id, status)
  const category = category_id
  return dispatch => {
    api.createTask({ title, description, deadline, category, status }).then(resp => {
      dispatch(createTaskSucceeded(resp.data));
    })
  }
}

function editTaskSucceeded(task) {
  return {
    type: 'EDIT_TASK_SUCCEEDED',
    payload: {
      task,
    },
  }
}

export function editTask(id, params = {}) {
  return (dispatch, getState) => {
    console.log(params)
    const task = getTaskById(getState().TodoApp.tasks, id)
    const updatedTask = Object.assign({}, task, params)
    console.log(task)
    console.log(updatedTask)
    api.editTask(id, updatedTask).then(resp => {
      dispatch(editTaskSucceeded(resp.data))
    })
  }
}

function getTaskById(tasks, id) {
  return tasks.find(task => task.id === id);
}

function deleteTaskSucceeded(id) {
  return {
    type: 'DELETE_TASK_SUCCEEDED',
    payload: {
      id,
    },
  }
}

export function deleteTask(id) {
  return (dispatch, getState) => {
    api.deleteTask(id).then(resp => {
      console.log(resp)
      dispatch(deleteTaskSucceeded(id));
    })
  }
}