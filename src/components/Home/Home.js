import React, { Component } from 'react';
import MoviesCard from './MoviesCard';
import Spinner from '../common/Spinner';
import Modal from './Modal';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      searchText: "",
      key: "318c98f3",
      loading: false,
      hasModal: false,
      movie: {},
      movies: []
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchText !== this.state.searchText || this.state.loading) {
      fetch(
        `http://www.omdbapi.com/?s=${this.state.searchText}&apikey=${
          this.state.key
        }`
      )
        .then(res => res.json())
        .then(data => {
          let content = !data.Search ? [] : data.Search;
          console.log(content);
          this.setState({
            movies: content,
            loading: false
          });
        });
    }
  }

  onChange = e => {
    let value = e.target.value.trim();
    if (value) {
      this.setState({
        input: value.split(" ").join("+")
      });
    }
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState(prevState => ({
      searchText: prevState.input,
      loading: true
    }));
  };

  onOpenModal = (imdbID, e) => {
    e.preventDefault();
    fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=${this.state.key}`)
    .then(res => res.json())
    .then(movie => {this.setState({movie, hasModal: true}); console.log(this.state.movie)});
  };

  onCloseModal = () => {
    this.setState({hasModal: false});
  }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.onSubmit} className="form">
            <input
              placeholder="Type movie name here..."
              className="textfield"
              type="text"
              name="search"
              onChange={this.onChange}
            />
            <button className="searchbutton" type="submit">
              <i className="fas fa-search" />
            </button>
          </form>
        </div>
        {this.state.loading && <Spinner />}
        <div className="cardInterface">
          {this.state.movies.length > 0
            ? this.state.movies.map((movie, index) => {
                return (
                  <MoviesCard
                    detail={movie}
                    key={index}
                    onOpenModal={this.onOpenModal}
                  />
                );
              })
            : this.state.searchText && <p>No Movie found!</p>}
        </div>
        { this.state.hasModal && 
        <Modal movie={this.state.movie} onCloseModal={this.onCloseModal}/> }
      </div>
    );
  }
}

export default Home;
