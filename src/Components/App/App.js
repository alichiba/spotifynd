import React from 'react';
import './App.css';
import {SearchBar} from '../SearchBar/SearchBar';
import {SearchResults} from '../SearchResults/SearchResults';
import {Playlist} from '../Playlist/Playlist';
import {Cover} from '../Cover/Cover';
import Spotify from '../../util/Spotify';

// static values: [{ name: 'song0', album: 'album0', artist: 'artist0', id: 'id0' }, { name: 'song2', album: 'album2', artist: 'artist2', id: 'id2' }] || [{ name: 'song1', album: 'album1', artist: 'artist1', id: 'id1' }, { name: 'song3', album: 'album3', artist: 'artist3', id: 'id3' }]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [], 
      playlistName: 'My Mixtape',
      playlistTracks: [],
      cover: ["http://localhost:3000/record.png"]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    let savedTracks = this.state.playlistTracks;
    if (savedTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } else {
      savedTracks.push(track);
      this.setState({ playlistTracks: savedTracks});
    }
  }

  removeTrack(track) {
    let savedTracks = this.state.playlistTracks;
    let targetTrack = savedTracks.find(savedTrack => savedTrack.id === track.id)
    if (targetTrack) {
      savedTracks.splice(savedTracks.indexOf(targetTrack), 1);
      this.setState({ playlistTracks: savedTracks });
    }
  }

  updatePlaylistName(name) {
    this.setState( {playlistName: name});
  }

  savePlaylist() {
    let trackURIs = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackURIs, this.state.cover).then(() => {
      this.setState({
        playlistName: 'My Mixtape',
        playlistTracks: []
      });
    });
    }

  search(name) {
    Spotify.search(name).then(searchResults => {
      this.setState({searchResults: searchResults})
    })
  }

  render() {
    return (
      <div>
        <h1>Spoti<span className="highlight">fynd</span></h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <div className="App-cover">
              <Cover/>
              <Playlist playlist={this.state.playlistName} tracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist}/>
            </div> 
          </div>
        </div>
      </div>
    )
  }
}

export default App;
