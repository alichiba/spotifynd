import './SearchBar.css';
import React from 'react';

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this); 
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    search() {
        this.props.onSearch(this.state.term);
    }

    handleTermChange(e) {
        this.setState( { term: e.target.value})
    }

    handleKeyDown(e) {
        if (e.keyCode === 13)    {
            this.search();
        }
    }

    render() {
        return (
            <div className="SearchBar" onKeyDown={this.handleKeyDown}>
                <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} />
                <button className="SearchButton" onClick={this.search}>SEARCH</button>
            </div>
        )
    }
}