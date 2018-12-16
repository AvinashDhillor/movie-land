import React, { Component } from 'react';
import MoviesCard from './MoviesCard';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      searchText: '',
      movies: []
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    let value = e.target.value;
    this.setState({
      input: value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState(prevState => ({
      searchText: prevState.input
    }));
    e.target.elements.search.value = '';

    fetch('http://www.omdbapi.com/?s=superman%20vs%20batman&apikey=318c98f3')
      .then(res => res.json())
      .then(data => {
        console.log(data.Search);
        this.setState({
          movies: data
        });
      });
  }

  render() {
    let renderContent;
    if (this.state.movies.length === 0) {
      renderContent = <h1>Show top 10 movies</h1>;
    } else {
      renderContent = <MoviesCard />;
    }

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type='text' name='search' onChange={this.onChange} />
          <button type='submit'>Search</button>
        </form>
        {renderContent}
      </div>
    );
  }
}

export default Home;
