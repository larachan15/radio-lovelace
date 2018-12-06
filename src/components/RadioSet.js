import React, { Component } from 'react';
import "./styles/RadioSet.css";

import Playlist from './Playlist';

class RadioSet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tracks: props.tracks
    };
  }

  toggleTrackFavorite = (title) => {
    const tracks = [...this.state.tracks];
    tracks.forEach((track) => {
      if (track.title === title) {
        track.favorite = !track.favorite;
      }
    });
    
    this.setState({ tracks });
  }

  render() {
    const playlists = {
      morningTracks: this.state.tracks.slice(0, this.state.tracks.length / 2),
      eveningTracks: this.state.tracks.slice(this.state.tracks.length / 2, this.state.tracks.length)
    };
    return (
      <div className="radio-set">
      <section className="radio-set--playlist-container">
      <Playlist
        side="Morning"
        tracks={playlists.morningTracks}
        onToggleTrackFavorite={this.toggleTrackFavorite}
      />
      <Playlist
        side="Evening"
        tracks={playlists.eveningTracks}
        onToggleTrackFavorite={this.toggleTrackFavorite}
      />
      </section>
      </div>
    );
  }
}

export default RadioSet;
