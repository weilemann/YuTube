import React from 'react';
import VideoCard from './VideoCard';
import VideoFrame from './VideoFrame';

class VideoList extends React.Component {
  state = {
    url: 'https://www.youtube.com/embed/V1Pl8CzNzCw',
    title: '',
    description: '',
    channelTitle: '',
  };

  onVideoClick = (videoId) => {
    this.setState({
      url: 'https://www.youtube.com/embed/' + videoId.id.videoId,
      title: videoId.snippet.title,
      description: videoId.snippet.description,
      channelTitle: videoId.snippet.channelTitle,
    });
  };

  render() {
    return (
      <div className='ui container' style={{ display: 'flex' }}>
        <div style={{ width: '70%', height: '431px' }}>
          <VideoFrame
            videoURL={this.state.url}
            videoTitle={this.state.title}
            videoDescription={this.state.description}
            videoChannelTitle={this.state.channelTitle}
          />
        </div>
        <div style={{ width: '30%', marginLeft: '10px' }}>
          {this.props.videos.map((video) => {
            return (
              <VideoCard
                key={video.id.videoId}
                videoImage={video.snippet.thumbnails.default}
                videoTitle={video.snippet.title}
                videoPublish={video.snippet.publishedAt}
                onClick={() => {
                  this.onVideoClick(video);
                }}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default VideoList;
