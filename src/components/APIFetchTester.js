import React, { Component } from 'react';

class APIFetchTester extends Component {

    constructor(){
        super()
        this.state={
            list:[],
            stringValue:'initial'
        }
        this.getMovies = this.getMovies.bind(this)
    }

    componentDidMount(){
        console.log('componentDidMount::INIT')
        this.getMovies()

    }

    getMovies(){
        console.log('getMovies :: INIT')
        return fetch('https://facebook.github.io/react-native/movies.json')
        .then((response) => response.json())
        .then((responseJson) => {
          return responseJson.movies;
        })
        .catch((error) => {
          console.error(error);
        });
        console.log('getMovies::END')
    }

    render() {
        console.log('render::INIT');
        return (
            <div>
                <p/>
                <div> API Fecth Tester Component </div>
            </div>
        );
    }
}

export default APIFetchTester;