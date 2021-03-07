import React, { Component } from 'react';
import { GENRE } from '../../consts/constants';
import { DEFAULT_MOVIE } from '../../consts/movie';
import './AddMovie.css';

export default class AddMovieComponent extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  onValueChange = ({ target: { value, name } }) => {
    this.setState({
      movie: {
        ...this.state.movie,
        [name]: value
      }
    });
  };

  getInitialState = () => {
    const movie = { ...DEFAULT_MOVIE, id: Math.random() };
    const state = {
      movie: this.props.editMode
        ? this.props.movie
        : movie
    };
    return state;
  };

  handleReset = () => {
    this.setState(this.getInitialState());
  };

  isDataValid() {
    const { title, releaseDate, movieURL, genre, overview, runtime } = this.state.movie;
    const errors = {};
    if (this.isEmptyField(title)) {
      errors.title = 'Title is required';
    }
    if (this.isEmptyField(movieURL)) {
      errors.movieURL = 'MovieURL is required';
    }
    if (this.isEmptyField(overview)) {
      errors.overview = 'Overview is required';
    }
    if (this.isEmptyField(genre)) {
      errors.genre = 'Genre is required';
    }
    if (!releaseDate) {
      errors.releaseDate = 'Release Date is required';
    } else if (new Date() < new Date(releaseDate)) {
      errors.releaseDate = 'Release Date should not exceed current date';
    }
    if (!runtime) {
      errors.runtime = 'Runtime  is required';
    }

    return errors;
  }

  isEmptyField(value) {
    return !value || !value.trim();
  }

  render() {
    const { editMode, onSubmit } = this.props;
    const {
      movie,
      movie: { id, title, releaseDate, movieURL, genre, overview, runtime }
    } = this.state;
    const errors = this.isDataValid();
    const isSubmitDisabled = Object.keys(errors).length > 0;

    return (
      <>
        <div className="addmovie-header">
          {
            editMode
              ? 'Edit Movie'
              : 'Add Movie'
          }
        </div>
        {editMode && (
          <>
            <label className="input-label">Movie Id</label>
            <div className="movie-id">{id}</div>
          </>
        )}
        <div>
          <label className="input-label" htmlFor="title">
            Title
          </label>
          <input
            className="input-field"
            onChange={this.onValueChange}
            placeholder="Movie Title here"
            type="text"
            id="title"
            name="title"
            value={title}
          />
          {errors.title && <div className="showErrors">{errors.title}</div>}
        </div>
        <div>
          <label className="input-label" htmlFor="releaseDate">
            Release Date
          </label>
          <input
            className="input-field"
            onChange={this.onValueChange}
            placeholder="Select Date"
            type="date"
            id="releaseDate"
            value={releaseDate}
            name="releaseDate"
          />
          {errors.releaseDate && <div className="showErrors">{errors.releaseDate}</div>}
        </div>
        <div>
          <label className="input-label" htmlFor="movieURL">
            Movie URL
          </label>
          <input
            className="input-field"
            onChange={this.onValueChange}
            placeholder="Movie URL here"
            type="text"
            value={movieURL}
            name="movieURL"
            id="movieURL"
          />
          {errors.movieURL && <div className="showErrors">{errors.movieURL}</div>}
        </div>
        <div>
          <label className="input-label" htmlFor="genre">
            Genre
          </label>
          <select
            className="input-field"
            onChange={this.onValueChange}
            type="text"
            value={genre}
            id="genre"
            name="genre"
          >
            <option value="">Select Genre</option>
            {GENRE.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
          {errors.genre && <div className="showErrors">{errors.genre}</div>}
        </div>
        <div>
          <label className="input-label" htmlFor="overview">
            Overview
          </label>
          <input
            className="input-field"
            onChange={this.onValueChange}
            type="text"
            value={overview}
            placeholder="Overview here"
            name="overview"
            id="overview"
          />
          {errors.overview && <div className="showErrors">{errors.overview}</div>}
        </div>
        <div>
          <label className="input-label" htmlFor="runtime">
            RunTime
          </label>
          <input
            className="input-field"
            onChange={this.onValueChange}
            type="text"
            value={runtime}
            id="runtime"
            placeholder="Runtime here"
            name="runtime"
          />
          {errors.runtime && <div className="showErrors">{errors.runtime}</div>}
        </div>
        <div className="buttons-wrapper">
          <button className="button-reset" onClick={this.handleReset}>
            RESET
          </button>
          <button
            disabled={isSubmitDisabled}
            className="button-submit"
            onClick={() => {
              onSubmit(movie);
            }}
          >
            {
              editMode
                ? 'SAVE'
                : 'SUBMIT'
            }
          </button>
        </div>
      </>
    );
  }
}
