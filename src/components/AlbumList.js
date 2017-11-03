import React, { Component } from 'react';
import {ScrollView, Text, View} from 'react-native';
import AlbumDetail from './AlbumDetail'

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    return fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => response.json())
      .then((responseJson) => {
          this.setState({ albums: responseJson });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  generateAlbum() {
    return this.state.albums.map(album =>
        <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
      return (
        <View>
          {this.generateAlbum()}
        </View>
    );
  }
}

export default AlbumList;
