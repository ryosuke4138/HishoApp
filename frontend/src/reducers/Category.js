const initialState = {
  categories: [],
  isLoading: false,
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CATEGORIES_STARTED': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'FETCH_CATEGORIES_SUCCEEDED': {
      return {
        ...state,
        categories: action.payload.categories,
        isLoading: false,
      };
    }
    case 'FETCH_CATEGORIES_FAILED': {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
}
    case 'CREATE_CATEGORY_SUCCEEDED': {
      return {
        ...state,
        categories: state.categories.concat(action.payload.category),
      };
    }
    case 'EDIT_CATEGORY_SUCCEEDED': {
      const { payload } = action;
      const nextCategories = state.categories.map(category => {
        if (category.id === payload.category.id) {
          return payload.category;
        }

        return category;
      });
      return {
        ...state,
        categories: nextCategories,
      };
    }
    case 'DELETE_CATEGORY_SUCCEEDED': {
      const { payload } = action;
      const nextCategories = state.categories.filter(category => category.id !== payload.id)
      return {
        ...state,
        categories: nextCategories,
      };
    }
    default: {
      return state;
    }
  }
}