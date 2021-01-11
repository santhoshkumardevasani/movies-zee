import axios from "axios";

  
  
  
  export const FETCH_MOVIES_BEGIN = "FETCH_MOVIES_BEGIN";
  export const FETCH_MOVIES_SUCCESS =
    "FETCH_MOVIES_SUCCESS";
  export const FETCH_MOVIES_FAILURE =
    "FETCH_MOVIES_FAILURE";
  export const SAVE_MOVIE = "SAVE_MOVIE";
  export const fetchMoviesBegin = movies => ({
    type: FETCH_MOVIES_BEGIN,
    movies
  });
  export const saveMovie = movies => ({
    type: FETCH_MOVIES_SUCCESS,
    payload:movies
  });
  
  export const fetchMoviesSuccess = movies => ({
    type: FETCH_MOVIES_SUCCESS,
    movies
  });
  
  export const fetchMoviesFailure = error => ({
    type: FETCH_MOVIES_FAILURE,
    payload: { error }
  });
  
const fetchData = (url, data) => {
  // const response = axios.post(url,{data});
  // return Promise.resolve(response);

  fetch('/addMovie', data)
            .then(function (response) {
                console.log("addMovie from reactJS============>", response);
                return Promise.resolve(response);
                //store.dispatch(saveMovie(Promise.resolve(response)));

            })
            .catch(function (error) {
                console.log(error);
            });
}
  export const saveMovieEvent = (data) => {
    return async(dipatch)=>{
     dipatch(saveMovieDataRequest(data));
    }
  }

  export const saveMovieDataRequest = (data) => {
    return async(dispatch) => {
      try{
        let movieRes = await fetchData('/addMovie', data);
        dispatch(fetchMoviesSuccess(movieRes));
      }
      catch(e){
        console.log(e);
      }
    }
  }



  export const fectchMoviesEvent = () => {
    return async(dipatch)=>{
     dipatch(fectchMoviesDataRequest());
    }
  }

  export const fectchMoviesDataRequest = () => {
    return async(dispatch) => {
      try{
        axios.get('/movies')
            .then(response => {
                console.log(response.data);
                dispatch(fetchMoviesBegin(response.data));
            })
      }
      catch(e){
        console.log(e);
      }
    }
  }
  