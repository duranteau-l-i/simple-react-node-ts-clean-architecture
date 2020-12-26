import { combineReducers, createStore, applyMiddleware } from "redux";
import { postsReducer } from "./posts/reducers";
import { postsApiMiddleware } from "./posts/apiMiddleware";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  posts: postsReducer
});

export type RootState = ReturnType<typeof rootReducer>;

const middlewareEnhancer = applyMiddleware(thunk, postsApiMiddleware);

const store = createStore(rootReducer, composeWithDevTools(middlewareEnhancer));

export default store;
