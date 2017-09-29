import React, { Component } from 'react';

class TestFetchAPI extends Component {
    constructor() {
        super()
        this.state = {
            listMovies: [],
            stringValue: 'initial'
        }
        this.getMovies = this.getMovies.bind(this)
    }
    componentDidMount() {
        console.log('componentDidMount::INIT')
        this.getMovies()
    }
    getMovies() {
        console.log('getMovies:: INIT')
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ listMovies: responseJson.movies })
                console.log('getMovies::FETCH state=', this.state.listMovies)
                return responseJson.movies;
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {
        console.log('render::INIT');
        let movieTitles = this.state.listMovies.map(function (movie) {
            return movie.title
        })
        console.log('render::movie titles=', movieTitles);
        return (
            <div>
                <br/>
                <div><b><u>Test fetch API component</u></b></div>
                <br/>
                <div>{movieTitles}</div>
            </div>
        );
    }
}

export default TestFetchAPI;