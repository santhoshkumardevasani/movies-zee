import {
    FETCH_MOVIES_BEGIN,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_FAILURE
  } from "../actions/movieActions";
  
  const initialState = {
    items: [],
    loading: false,
    error: null
  };
  
  export default function movieReducer(
    state = initialState,
    action
  ) {
      console.log("Movie reducer===========>",action)
    switch (action.type) {
      case FETCH_MOVIES_BEGIN:
        // Mark the state as "loading" so we can show a spinner or something
        // Also, reset any errors. We're starting fresh.
        return {
          ...state,
          loading: false,
          items: action.movies
        };
  
      case FETCH_MOVIES_SUCCESS:
        // All done: set loading "false".
        // Also, replace the items with the ones from the server
        return {
          ...state,
          loading: false,
          items: action.movies//[JSON.parse(action.movies.data[0].data.body)]
        };
  
      case FETCH_MOVIES_FAILURE:
        // The request failed, but it did stop, so set loading to "false".
        // Save the error, and we can display it somewhere
        // Since it failed, we don't have items to display anymore, so set it empty.
        // This is up to you and your app though: maybe you want to keep the items
        // around! Do whatever seems right.
        return {
          ...state,
          loading: false,
          error: action.error,
          items: []
        };
  
      default:
        // ALWAYS have a default case in a reducer
        return state;
    }
  }
  