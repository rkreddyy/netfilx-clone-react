import React from "react";
import Logo from "../common/Logo";
import { useToggle } from "../common/hooks/useToggle";
import AddMovie from "../ModalAddMovie";
import MovieDetails from "../MovieContainer/MovieDetails/MovieDetails";
import searchIcon from "../../assets/icons/searchIcon.svg";
import "./Header.scss";

export default ({ movieId, movies, closeMovie }) => {
  const [isAddModalOpened, setIsAddModalOpened] = useToggle(false);

  const handleOpenAddModal = () => setIsAddModalOpened(true);
  const handleCloseAddModal = () => setIsAddModalOpened(false);

  const currentMovie = movies.find(movie => movie.id === movieId);
  return (
    <>
      <header className="Header">
        <div className="Header__top-panel">
          <Logo />
          {currentMovie ? (
            <button
              className="btn-search"
              onClick={closeMovie}
            >
              <img src={searchIcon} alt="" />
            </button>
          ) : (
            <button
              className="btn-add-movie"
              onClick={handleOpenAddModal}
            >
              +add movie
            </button>
          )}
        </div>
        <div className="Header__content">
          {currentMovie
            ? <MovieDetails currentMovie={currentMovie} />
            : <HeaderContent />
          }
        </div>
      </header>
      {isAddModalOpened && <AddMovie closeAddModal={handleCloseAddModal} />}
    </>
  );
};

const HeaderContent = () => (
  <div className="search-panel">
    <span className="search-panel-label">find your movie</span>
    <input
      className="search-panel-input"
      type="text"
      placeholder="What do you want to watch?"
    />
    <button className="search-panel-button">search</button>
  </div>
);
