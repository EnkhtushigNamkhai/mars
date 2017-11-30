import React from 'react';
import SearchBox from '../containers/SearchBox';
import MovieDetail from '../containers/MovieDetail';

function Home(props) {
  return (
    <div>
      <SearchBox />
      <MovieDetail />
    </div>
  );
}

export default Home;