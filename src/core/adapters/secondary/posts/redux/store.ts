import { combineReducers, createStore, applyMiddleware } from "redux";
import { postsReducer } from "./posts/reducers";
import { postsApiMiddleware } from "./posts/apiMiddleware";

const rootReducer = combineReducers({
  posts: postsReducer
});

export type RootState = ReturnType<typeof rootReducer>;

const middlewareEnhancer = applyMiddleware(postsApiMiddleware);

const store = createStore(rootReducer, middlewareEnhancer);

export default store;
