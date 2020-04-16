import React from 'react';
import youtube from '../api/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import YoutubeConfiguration from '../api/youtubeConfiguration.json';

class App extends React.Component {
  state = { videos: [] };

  onSearchSubmit = async (term) => {
    const response = await youtube.get(
      `/search?key=${YoutubeConfiguration.key}&type=video&part=snippet`,
      {
        params: { q: term },
      }
    );
    this.setState({ videos: response.data.items });
    console.log(response.data);
  };

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div>
          <VideoList videos={this.state.videos} />
        </div>
        <div></div>
      </div>
    );
  }
}

export default App;
