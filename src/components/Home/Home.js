import React, { Component } from 'react';
import MoviesCard from './MoviesCard';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      searchText: '',
      key: '318c98f3',
      totalResults: 0,
      movies: []
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchText !== this.state.searchText) {
      fetch(
        `http://www.omdbapi.com/?s=${this.state.searchText}&apikey=${
          this.state.key
        }`
      )
        .then(res => res.json())
        .then(data => {
          let content = !data.Search ? [] : data.Search;
          this.setState({
            movies: content,
            totalResults: data.totalResults
          });
        });
    }
  }

  onChange = e => {
    let value = e.target.value.trim();
    if (value) {
      this.setState({
        input: value.split(' ').join('+')
      });
    }
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState(prevState => ({
      searchText: prevState.input
    }));
  };

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.onSubmit} className='form'>
            <input
              class='textfield'
              type='text'
              name='search'
              onChange={this.onChange}
            />
            <button class='searchbutton' type='submit'>
              <i class='fas fa-search' />
            </button>
          </form>
        </div>
        <div className='cardInterface'>
          {this.state.movies.length > 0 ? (
            this.state.movies.map(movie => {
              return <MoviesCard detail={movie} key={movie.imdbID} />;
            })
          ) : !this.state.searchText ? null : (
            <p>No Movie found!</p>
          )}
        </div>
      </div>
    );
  }
}

export default Home;
