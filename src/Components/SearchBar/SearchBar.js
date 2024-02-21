import Spotify from '../../util/Spotify';
import './SearchBar.css';
import React from 'react';

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this); 
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    search() {
        if(!this.state.term && Spotify.hasAccessToken()) {
            document.getElementById('errorMessage').textContent = 'Please enter a search term';
            this.props.onSearch(this.state.term);
        } else {
            document.getElementById('errorMessage').textContent = '';
            this.props.onSearch(this.state.term);
        }
    }

    handleTermChange(e) {
        this.setState( { term: e.target.value})
    }

    handleKeyDown(e) {
        if (e.keyCode === 13) {
            this.search();
        }
    }

    render() {
        return (
            <div className="SearchBar" onKeyDown={this.handleKeyDown}>
                <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} />
                <p id="errorMessage">{Spotify.hasAccessToken() ? "Success! Please enter a search term" : "Please login to Spotify"}</p>
                <button id="searchButton" className="SearchButton" onClick={this.search}>{Spotify.hasAccessToken() ? "SEARCH" : "LOGIN"}</button>
            </div>
        )
    }
}