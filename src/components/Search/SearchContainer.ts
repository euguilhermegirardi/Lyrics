import { connect } from "react-redux";
import { Dispatch } from "redux";

import { setLyrics } from "../../store/modules/search/actions/lyricsActionCreators";
import { LyricsAction } from "../../store/modules/search/actions/types";
import { getLyrics } from "../../store/modules/search/actions/lyricsActionCreators";
import SearchComponent from "./SearchComponent";

const mapDispatchToProps = (dispatch: Dispatch<LyricsAction>) => ({
  onSearch: (artist: string, song: string) => {
    dispatch(getLyrics(artist, song));
  },
  onClear: () => {
    dispatch(setLyrics(""));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(SearchComponent);
