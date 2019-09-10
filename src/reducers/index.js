// Import all actions
import {
  FETCH_CONTENT_BEGIN,
  FETCH_CONTENT_SUCCESS,
  FETCH_CONTENT_FAILURE,
  ADD_CONTENT,
  REMOVE_CONTENT
} from '../actions';

// initialState for rootReducer/store
const initialState = {
  mylist: [],
  recommendations: [],
  loading: false,
  error: null
}

// rootReducer function using switch statement & imported actions
// Using Thunk to manage state as middleware instead of ComponentDidMount
function rootReducer(state = initialState, action) {
  switch(action.type) {
    // Create a loading phase while fetch begins
    case FETCH_CONTENT_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    // Fetch was sucessful
    case FETCH_CONTENT_SUCCESS:
      return {
        ...state,
        ...action.payload.content,
        loading: false
      };
    // Fetch was unsucessful
    case FETCH_CONTENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case REMOVE_CONTENT:
      return {
        ...state,
        mylist: state.mylist.filter(movie => {
          return movie.id !== action.payload.id
        }),
        recommendations: [
          ...state.recommendations,
          action.payload
        ]
      };
    case ADD_CONTENT:
      return {
        ...state,
        recommendations: state.recommendations.filter(movie => {
          return movie.id !== action.payload.id
        }),
        mylist: [
          ...state.mylist,
          action.payload
        ]
      };
    default:
      return state;
  };
};

export default rootReducer;
