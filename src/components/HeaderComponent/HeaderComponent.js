import React, { createRef, PureComponent } from 'react';
import PropTypes from 'prop-types';
import './HeaderComponent.css';

export class HeaderComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.searchBar = createRef();
    }

    handleClick = () => {
        this.props.onSearch(this.searchBar.current.value);
    }

    render() {
        return (
            <div className="header-wrapper">
                <div className="image-holder"></div>
                <div className="content-holder">
                    <div className="top-bar">
                        <div>
                            <span>
                                <strong>netflix</strong>
                                roulette
                            </span>
                        </div>
                        <button className="add-movie"> + ADD MOVIE</button>
                    </div>
                    <div className="find-movie-wrapper">
                        <div className="find-movie">Find your Movie</div>
                        <input className="search-bar" ref={this.searchBar} placeholder="what do you want to watch?" />
                        <button className="search-button" onClick={this.handleClick}>Search</button>
                    </div>
                </div>
            </div>
        );
    }
}

HeaderComponent.propTypes = {
    onSearch: PropTypes.func
};

