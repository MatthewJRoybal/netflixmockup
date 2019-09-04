import { FETCH_INITIAL_CONTENT } from '../actions';

const initialState = {
  mylist: [],
  recommendations: []
}

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_INITIAL_CONTENT: {
      return {...state, ...action.payload}
    }
    case "REMOVE_CONTENT":
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
    case "ADD_CONTENT":
      return {
        ...state,
        recommendations: state.recommendations.filter(movie => {
          return movie.id !== action.payload.id
        }),
        mylist: [
          ...state.mylist,
          action.payload
        ]
      }
    default:
      return state;
  }
};

export default rootReducer;
