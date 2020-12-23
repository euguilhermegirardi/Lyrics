import { connect } from "react-redux";

import { AppState } from "../../store/modules/rootReducer";
import * as actionTypes from "../../store/modules/search/actions/types";
import LyricsComponent from "./LyricsComponent";

const mapStateToProps = (state: AppState) => {
  return {
    lyrics: state.lyrics.lyrics,
    isLoading: state.isLoading[actionTypes.GET_LYRICS],
    error: state.error[actionTypes.GET_LYRICS]
  };
};

export default connect(
  mapStateToProps,
  null
)(LyricsComponent);
