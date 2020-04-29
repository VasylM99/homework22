import * as Actions from '../actions/posts.actions';


const initialState = {
  posts: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case Actions.GET_POSTS:
      return {
        ...state,
        posts:action.payload
      };
    default:
      return state;
  }
}