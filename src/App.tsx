import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Lyrics from './components/Lyrics/LyricsContainer';
import Search from './components/Search/SearchContainer';

function App() {
  return (
    <Provider store={store}>
      <h1>Search</h1>
      <Lyrics />
      <Search />
    </Provider>
  );
}

export default App;
