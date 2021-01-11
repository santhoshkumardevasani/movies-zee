import React from "react";
import { connect } from "react-redux";
import { fetchMoives } from "../actions/movieActions";
//import data from './data/movies.json';
import MoviesListGrid from './MoviesListGrid';

class MoviesList extends React.Component {
  render() {
    const { error, loading, movies = [] } = this.props;
    console.log("PROPS====>", this.props);
    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <MoviesListGrid
          {...this.props}
          moviesData={movies}

        />
      </div>

    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies.items,
  loading: state.movies.loading,
  error: state.movies.error
});

export default connect(mapStateToProps)(MoviesList);
