import * as api from '../api/Category';
import * as actionsTodoApp from './TodoApp';

function fetchCategoriesSucceeded(categories) {
  return {
    type: 'FETCH_CATEGORIES_SUCCEEDED',
    payload: {
      categories,
    },
  };
}

function fetchCategoriesFailed(error) {
  return {
    type: 'FETCH_CATEGORIES_FAILED',
    payload: {
      error,
    },
  };
}

function fetchCategoriesStarted() {
  return {
    type: 'FETCH_CATEGORIES_STARTED',
  };
}

export function fetchCategories() {
  return dispatch => {
    dispatch(fetchCategoriesStarted());

    api
      .fetchCategories()
      .then(resp => {
        dispatch(fetchCategoriesSucceeded(resp.data));
      })
      .catch(err => {
        dispatch(fetchCategoriesFailed(err.message));
      });
  };
}

function createCategorySucceeded(category) {
  return {
    type: 'CREATE_CATEGORY_SUCCEEDED',
    payload: {
      category,
    },
  }
}

export function createCategory(name) {
  console.log('action!!!')
  console.log(name)
  return dispatch => {
    api.createCategory({ name }).then(resp => {
      dispatch(createCategorySucceeded(resp.data));
    })
  }
}

function editCategorySucceeded(category) {
  return {
    type: 'EDIT_CATEGORY_SUCCEEDED',
    payload: {
      category,
    },
  }
}

export function editCategory(id, params = {}) {
  return (dispatch, getState) => {
    const category = getCategoryById(getState().TodoApp.category, id);
    const updatedCategory = Object.assign({}, category, params);
    api.editCategory(id, updatedCategory).then(resp => {
      dispatch(editCategorySucceeded(resp.data));
    })
  }
}

function getCategoryById(categories, id) {
  return categories.find(category => category.id === id);
}

function deleteCategorySucceeded(id) {
  return {
    type: 'DELETE_CATEGORY_SUCCEEDED',
    payload: {
      id,
    },
  }
}

function getTasksById(id, getState) {
  return getState().TodoApp.tasks.filter(task => task.category === id)
}

export function deleteCategory(id) {
  return (dispatch, getState) => {
    const tasks = getTasksById(id, getState)
    tasks.map(task => 
      actionsTodoApp.deleteTask(task.id)
    )
    api.deleteCategory(id).then(resp => {
      dispatch(deleteCategorySucceeded(id));
    })
  }
}