import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import store from './store/store';
import { Provider } from 'react-redux';
import Header from './components/Header';
import MoviesList from './components/MoviesList';
import { fetchMoviesBegin } from './actions/movieActions';
import './css/styles.css';

class App extends React.Component {
    componentDidMount() {        
            axios.get('/movies')
            .then(response => {
                console.log(response.data);
                store.dispatch(fetchMoviesBegin(response.data));
            })
    }
    render() {
        return (
            <div className="main-section">
                <Header {...this.props}/>
                <MoviesList />
            </div>
        )
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root'));