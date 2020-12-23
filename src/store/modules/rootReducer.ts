import { combineReducers } from "redux";
import lyricsReducer from "../modules/search/reducer/lyricsReducer";
import isLoadingReducer from "../modules/search/reducer/isLoadingReducer";
import errorReducer from "../modules/search/reducer/errorReducer";

const rootReducer = combineReducers({
  lyrics: lyricsReducer,
  isLoading: isLoadingReducer,
  error: errorReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
