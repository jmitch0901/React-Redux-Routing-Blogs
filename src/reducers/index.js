import { combineReducers } from 'redux';
import PostsReducer from './reducer-posts';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer //MUST HAVE A KEY OF FORM!!!
});

export default rootReducer;
